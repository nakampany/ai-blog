'use client'

import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import type React from 'react'
import { useState } from 'react'

interface Props {
    onClick: () => void
}

export const Header: React.FC<Props> = (props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position="static" style={{ backgroundColor: 'gray' }}>
            <Toolbar
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Box display="flex" alignItems="center">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={props.onClick}
                    >
                        <Menu open={false} />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        <a
                            href="/"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            記事執筆支援ツール
                        </a>
                    </Typography>
                    <Button onClick={props.onClick}>
                        ドロワーがお開きします
                    </Button>
                </Box>

                <Box display="flex" alignItems="center">
                    <Typography
                        style={{ marginRight: '20px', fontWeight: 'bold' }}
                    >
                        使い方Notion
                    </Typography>
                    <Typography
                        style={{ marginRight: '20px', fontWeight: 'bold' }}
                    >
                        その他Notion（採用文など）
                    </Typography>
                    <Typography
                        style={{ marginRight: '20px', fontWeight: 'bold' }}
                    >
                        合計 17,996 トークン
                    </Typography>
                    <IconButton onClick={handleMenuOpen}>
                        <Avatar
                            alt="User Avatar"
                            src="/static/images/samples/faces/face1.jpg"
                        />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{ 'aria-labelledby': 'profileDropdown' }}
                    >
                        <MenuList>
                            <MenuItem disabled>aaa@example.com</MenuItem>
                            <Divider />
                            <MenuItem onClick={handleMenuClose}>
                                ログイン機能作りたいかも？ログアウト
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
