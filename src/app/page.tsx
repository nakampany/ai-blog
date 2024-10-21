'use client'

import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
                padding: '0 16px'
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        color: '#424242',
                        animation: 'fadeIn 2s ease-in-out'
                    }}
                >
                    ブログ執筆支援ツール
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    color="textSecondary"
                    sx={{
                        marginBottom: '24px',
                        animation: 'fadeIn 3s ease-in-out'
                    }}
                >
                    タイトル生成、記事概要生成、記事のリライトを行うことができます！
                    <br className="font-bold" />
                    TODO：タスク一覧
                    <br />- プロンプトを頑張る
                    <br />- デザインを考え、CSSを整える
                    <br />- 事前学習を実装
                    <br />- ローカルストレージに保存
                    <br />- デプロイ
                    <br />- ログイン・認証機能
                </Typography>
                <Button
                    href="/TitleGeneration"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                        padding: '12px 24px',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        textTransform: 'none',
                        animation: 'fadeIn 4s ease-in-out',
                        ':hover': {
                            backgroundColor: '#1976d2'
                        }
                    }}
                >
                    ブログを書こう！
                </Button>
            </Container>
        </Box>
    )
}
