import React from 'react'
import posts from '../../../public/posts.json'
import Post from './Post'

function Feed() {
    return (
        <div className='mt-14 flex flex-col gap-4'>
            {posts.map((post) => (
                <div key={post.title} className=''>
                    <Post userName={post.author} URL={post.image} title={post.title} description={post.description} tags={post.tags} />
                </div>
            ))}
        </div>
    )
}

export default Feed