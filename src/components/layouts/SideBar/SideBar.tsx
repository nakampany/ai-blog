'use client'

import React from 'react'
import Link from 'next/link'
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    ListItemButton,
    ListItemIcon,
    Divider
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

interface props {
    open: boolean
    onClose: () => void
}

const menuItems = [
    { text: 'タイトル生成', link: '/TitleGeneration' },
    { text: 'アウトライン', link: '/Outline' },
    { text: 'リード文', link: '/LeadText' },
    { text: '本文', link: '/BodyText' },
    { text: 'まとめ', link: '/Conclusion' },
    { text: 'リライト（短文）', link: '/RewriteShort' },
    { text: 'リライト（長文）', link: '/RewriteLong' },
    { text: '誤字脱字チェック', link: '/CheckMistakes' },
    { text: '自由入力', link: '/FreeInput' }
]

export const SideBar: React.FC<props> = (props) => {
    return (
        <Drawer
            variant="temporary"
            anchor="left"
            open={props.open}
            onClose={props.onClose}
        >
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    <ListItem>
                        <ListItemText primary="メニュー" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={item.text} disablePadding>
                            <Link href={item.link} passHref>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
