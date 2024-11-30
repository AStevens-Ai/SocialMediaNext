import React from 'react'
import Post from './Post'


function Feed({ posts }) {


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
                            createdAt={post.createdAt}
                            userImage={post.imageUrl}
                            iD={post.iD}
                        />
                    </div>
                ))
            ) : <p>It&apos;s quiet... too quiet.</p>}
        </div>
    );
}


export default Feed;
