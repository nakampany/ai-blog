'use client'

import MenuIcon from '@mui/icons-material/Menu'
import {
    AppBar,
    Avatar,
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    MenuList,
    Toolbar,
    Typography
} from '@mui/material'
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
                            href="/TitleGeneration"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            記事執筆支援ツール
                        </a>
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={props.onClick}
                    >
                        <MenuIcon />
                    </IconButton>
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
                                ログイン機能作りたいかも？
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
