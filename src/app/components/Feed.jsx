import React from 'react'
import posts from '../../../public/posts.json'
import Post from './Post'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

function Feed() {
    return (
        <div className="mt-16 flex flex-col gap-4 px-4 max-w-screen-lg mx-auto">
            {posts.map((post) => (
                <div key={post.title} className="">
                    <Post
                        userName={post.author}
                        URL={post.image}
                        title={post.title}
                        description={post.description}
                        tags={post.tags}
                    />
                </div>
            ))}
        </div>

    );
}


export default Feed