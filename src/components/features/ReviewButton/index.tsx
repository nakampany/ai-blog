import React from 'react'

interface Props {
    isReviewing: boolean
    hasReviewed: boolean
    onReview: () => void
}

export const Component = (props: Props) => {
    const { isReviewing, hasReviewed, onReview } = props
    return (
        <>
            {isReviewing ? (
                <p className="float-right">
                    生成中です... 最長でも1分ほどかかります。
                </p>
            ) : (
                <button
                    type="button"
                    className="float-right rounded-md bg-indigo-600 mb-4 px-3 py-2 font-semibold text-white hover:bg-indigo-500 focus:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={onReview}
                >
                    {hasReviewed ? '再提案' : '提案'}
                </button>
            )}
        </>
    )
}
