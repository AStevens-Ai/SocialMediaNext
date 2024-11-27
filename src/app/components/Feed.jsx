import React from 'react'
import fetchPosts from '../lib/fetchPosts'
import Post from './Post'

function Feed({ posts }) {
    console.log('Posts in Feed Component:', posts);  // This should log the posts array
    return (
        <div className="mt-16 flex flex-col gap-4 px-4 max-w-screen-lg mx-auto">
            {posts?.length > 0 ? (
                posts.map((post) => (
                    <div key={post.title}>
                        <Post
                            userName={post.name}
                            URL={post.Image}
                            title={post.title}
                            description={post.content}
                            tags={post.tags}
                        />
                    </div>
                ))
            ) : <p>It's quiet... too quiet.</p>}
        </div>
    );
}


export default Feed;
