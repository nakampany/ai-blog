import React from 'react'

interface Props {
    copyToClipboard: () => void
    copySuccess: string
    clearReviewHistory: () => void
}

export const Component = (props: Props) => {
    const { copyToClipboard, copySuccess, clearReviewHistory } = props
    return (
        <div className="mt-4">
            <button
                type="button"
                className="rounded-md bg-green-600 px-3 py-2 font-semibold text-white hover:bg-green-500 focus:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={copyToClipboard}
            >
                コピー
            </button>
            {copySuccess && (
                <p className="text-green-600 mt-2">{copySuccess}</p>
            )}

            <button
                type="button"
                className="ml-4 rounded-md bg-red-600 px-3 py-2 font-semibold text-white hover:bg-red-500 focus:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={clearReviewHistory}
            >
                履歴を削除
            </button>
        </div>
    )
}
