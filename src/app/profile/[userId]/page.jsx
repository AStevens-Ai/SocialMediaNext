'use server'
import { fetchUser } from '../../lib/fetchUser'
import { fetchUserPosts } from '@/app/lib/fetchPosts'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileContent from '../../components/ProfileContent'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'


export default async function page({ params }) {
    console.log("Params:", params); // Check if params are correct

    const { userID } = params;
    const { userId } = await auth();
    console.log("UserID:", userID);
    console.log("Clerk userId:", userId);

    const [user, posts] = await Promise.all([
        fetchUser({ userId: userID }),
        fetchUserPosts({ userId: userID }),
    ]);

    return (
        <div className='bg-[#200c22] text-white pt-12'>
            <div className='border-b-[#a086b2] border-b-2'>
                <ProfileHeader user={user} clerkUserId={userId} />
            </div>
            {posts.length === 0 ? (
                <div className='flex flex-col justify-center gap-4 align-middle items-center h-full min-h-72 text-lg'>
                    <p className=''>No posts yet!</p>
                    <Link className='p-2 bg-purple-500 rounded-lg' href={'/create-post'}>Create Post</Link>
                </div>
            ) : (
                <ProfileContent posts={posts} />
            )}
        </div>
    );
}
