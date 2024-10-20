import { TextField } from '@mui/material'
import React from 'react'

interface Props {
    keyWords: string
    setKeyWords: (value: string) => void
}

export const Component = (props: Props) => {
    const { keyWords, setKeyWords } = props

    return (
        <TextField
            type="text"
            name="keyWords"
            placeholder="キーワード（カンマ区切りで5個まで）"
            value={keyWords}
            onChange={(event) => setKeyWords(event.target.value)}
            className="block w-full border-0 p-2 mb-4"
            fullWidth
        />
    )
}
