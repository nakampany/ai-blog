"use client";

import { Header } from "@/components/layouts/Header";
import { SideBar } from "@/components/layouts/SideBar";
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <html lang="ja">
            <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header onClick={toggleDrawer(true)} />
                <SideBar open={open} onClose={toggleDrawer(false)} />
                <main>{children}</main>
            </body>
        </html>
    );
}
