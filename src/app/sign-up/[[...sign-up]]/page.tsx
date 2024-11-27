import React from 'react'
import { SignUp } from '@clerk/nextjs'
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Sign up",
    description: "Social media but not",
};

function Page() {
    return (
        <div className='flex justify-center items-center h-screen p-5'>
            <SignUp />
        </div>
    )
}

export default Page