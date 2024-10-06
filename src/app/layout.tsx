import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from '@/components/layouts/Layout'
import type React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja" className={inter.className}>
            <Layout>{children}</Layout>
        </html>
    )
}
