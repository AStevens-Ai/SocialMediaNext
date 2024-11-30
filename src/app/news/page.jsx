import React from 'react'
import NewsPosts from '../components/NewsPosts'

function page() {
    return (
        <div className='flex gap-4 items-center flex-col justify-center mt-20'>
            <h1 className='text-xl font-bold '>Latest News</h1>
            <NewsPosts />
        </div>
    )
}

export default page