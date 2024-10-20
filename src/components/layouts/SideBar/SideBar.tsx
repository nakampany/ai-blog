'use client'

import ArticleIcon from '@mui/icons-material/Article'
import ChecklistIcon from '@mui/icons-material/Checklist'
import EditNoteIcon from '@mui/icons-material/EditNote'
import MailIcon from '@mui/icons-material/Mail'
import NotesIcon from '@mui/icons-material/Notes'
import ShortTextIcon from '@mui/icons-material/ShortText'
import SpellcheckIcon from '@mui/icons-material/Spellcheck'
import TitleIcon from '@mui/icons-material/Title'
import TocIcon from '@mui/icons-material/Toc'
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import Link from 'next/link'
import type React from 'react'

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
                        <ListItemText primary="機能一覧" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ pl: 3 }}>
                            <Link href={item.link} passHref>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.link === '/TitleGeneration' && (
                                            <TitleIcon />
                                        )}
                                        {item.link === '/Outline' && (
                                            <TocIcon />
                                        )}
                                        {item.link === '/LeadText' && (
                                            <ShortTextIcon />
                                        )}
                                        {item.link === '/BodyText' && (
                                            <ArticleIcon />
                                        )}
                                        {item.link === '/Conclusion' && (
                                            <NotesIcon />
                                        )}
                                        {item.link === '/RewriteShort' && (
                                            <EditNoteIcon />
                                        )}
                                        {item.link === '/RewriteLong' && (
                                            <EditNoteIcon />
                                        )}
                                        {item.link === '/CheckMistakes' && (
                                            <ChecklistIcon />
                                        )}
                                        {item.link === '/FreeInput' && (
                                            <SpellcheckIcon />
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
