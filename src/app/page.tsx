import React from 'react'
import Feed from './components/Feed'
import NewPost from './components/NewPost'
import fetchPosts from './lib/fetchPosts'
import { fetchUser } from './lib/fetchUser'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Latest Feed",
    description: "Social media but not",
};

async function page() {
    const posts = await fetchPosts()

    const fullPosts = await Promise.all(
        posts.map(async (post) => {
            const user = await fetchUser({ postUserId: post.userId })
            return {
                ...post,
                name: user?.name || "unknown user"
            }
        })
    )
    return (
        <div className="flex">
            <Feed posts={fullPosts} />
            <div className="bottom-5 rounded-lg right-5 p-2 bg-purple-500 hover:bg-purple-700 flex fixed">
                <NewPost />
            </div>
        </div>
    )
}

export default page