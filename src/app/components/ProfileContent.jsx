import React from 'react';
import ProfilePosts from './ProfilePosts';
import Link from 'next/link';

const ProfileContent = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {posts.map((post) => (
                <div key={post.id}>
                    <ProfilePosts post={post} />
                </div>
            ))}
            <Link className='p-2 bg-purple-500 rounded-lg fixed bottom-5 right-5 mx-auto' href={'/create-post'}>Create Post</Link>
        </div>
    );
};

export default ProfileContent;