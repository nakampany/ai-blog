'use client'

import { Header } from '@/components/layouts/Header'
import { SideBar } from '@/components/layouts/SideBar'
import React from 'react'

export const Layout: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <body>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh'
                }}
            >
                <Header onClick={toggleDrawer(true)} />
                <SideBar open={open} onClose={toggleDrawer(false)} />
                <main className="min-h-screen p-12">{children}</main>
            </div>
        </body>
    )
}
