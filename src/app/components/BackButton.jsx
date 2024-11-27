'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function BackButton() {
    const router = useRouter()
    return (
        <button onClick={() => { router.push('/') }} className='absolute bottom-10 lg:bottom-auto left-5 lg:left-10 lg:top-20 p-2 bg-purple-500 hover:bg-purple-700 text-white rounded'>Go Back</button>
    )
}

export default BackButton