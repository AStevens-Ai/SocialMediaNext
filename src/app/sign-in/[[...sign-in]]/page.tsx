import { SignIn } from '@clerk/nextjs'
import React from 'react'
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Sign in",
    description: "Social media but not",
};

function Page() {
    return (
        <div className='items-center justify-center p-5 flex h-screen'>
            <SignIn />
        </div>
    )
}

export default Page