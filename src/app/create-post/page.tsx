import React from 'react'
import CreatePostForm from '../components/CreatePostForm'
import BackButton from '../components/BackButton'
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Create Post",
  description: "Social media but not",
};
function page() {
  return (
    <div className='items-center justify-center p-5 flex h-screen'>
      <BackButton />
      <CreatePostForm />
    </div>
  )
}

export default page