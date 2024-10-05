import type { Metadata } from 'next'
import { Header } from "@/components/layouts/Header";
import { SideBar } from "@/components/layouts/SideBar";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'AI Blog Reviewer'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <Header />
                <SideBar />
                {children}
            </body>
        </html>
    )
}
