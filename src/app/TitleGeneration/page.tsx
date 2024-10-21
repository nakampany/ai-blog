'use client'

import * as KeywordInput from '@/components/features/KeywordInput'
import * as MarkdownOutput from '@/components/features/MarkdownOutput'
import * as ReviewActions from '@/components/features/ReviewActions'
import * as ReviewButton from '@/components/features/ReviewButton'
import type React from 'react'
import { useTitleGeneration } from './useTitleGeneration'

const Page: React.FC = () => {
    const {
        keyWords,
        setKeyWords,
        reviewComment,
        isReviewing,
        hasReviewed,
        copySuccess,
        onReview,
        copyToClipboard,
        clearReviewHistory
    } = useTitleGeneration()

    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8 font-bold">
                タイトル生成
            </h1>
            <p>以下のフォームにブログのキーワードを入力してください。</p>

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
