import React from 'react'
import posts from '../../../public/posts.json'
import Post from './Post'

function Feed() {
    return (
        <div className='mt-14'>
            {posts.map((post) => (
                <div key={post.title}>
                    <Post userName={post.author} URL={post.image} title={post.title} description={post.description} tags={post.tags} />
                </div>
            ))}
        </div>
    )
}

export default Feed