'use client'
import React from 'react'

import Link from 'next/link'

function BackButton() {
    return (
        <Link href={'/'} className='absolute bottom-10 lg:bottom-auto left-5 lg:left-10 lg:top-20 p-2 bg-purple-500 hover:bg-purple-700 text-white rounded'> Go Back</Link>
    )
}

export default BackButton