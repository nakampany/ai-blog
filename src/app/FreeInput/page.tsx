import React from 'react'

export default function FreeInput() {
    return (
        <main className="min-h-screen p-12">
            <h1 className="text-center text-2xl mb-8">自由入力</h1>
            {/* 自由入力のUIを追加 */}
            <textarea
                name="free-input"
                rows={10}
                className="block w-full border-0 p-2 mb-4"
                placeholder="自由に入力してください"
            ></textarea>
        </main>
    )
}
