'use client'

import * as KeywordInput from '@/components/features/KeywordInput'
import * as MarkdownOutput from '@/components/features/MarkdownOutput'
import * as ReviewActions from '@/components/features/ReviewActions'
import * as ReviewButton from '@/components/features/ReviewButton'
import * as TitleInput from '@/components/features/TitleInput'
import type React from 'react'
import { useLeadText } from './useLeadText'

const Page: React.FC = () => {
    const {
        title,
        setTitle,
        keyWords,
        setKeyWords,
        reviewComment,
        isReviewing,
        hasReviewed,
        copySuccess,
        onReview,
        copyToClipboard,
        clearReviewHistory
    } = useLeadText()

    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8 font-bold">
                リード文生成
            </h1>
            <p>
                以下のフォームにブログの タイトル、キーワードを入力してください
            </p>

            <TitleInput.Component title={title} setTitle={setTitle} />

            <KeywordInput.Component
                keyWords={keyWords}
                setKeyWords={setKeyWords}
            />

            <ReviewButton.Component
                isReviewing={isReviewing}
                hasReviewed={hasReviewed}
                onReview={onReview}
            />

            <p className="text-gray-600 mt-2">
                文字数: {reviewComment.length} 文字
            </p>

            <MarkdownOutput.Component reviewComment={reviewComment} />

            {reviewComment && (
                <ReviewActions.Component
                    copyToClipboard={copyToClipboard}
                    copySuccess={copySuccess}
                    clearReviewHistory={clearReviewHistory}
                />
            )}
        </main>
    )
}

export default Page
