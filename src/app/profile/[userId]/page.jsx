import { fetchUserbyPostId } from '../../lib/fetchUser'
import { fetchUserPosts } from '@/app/lib/fetchPosts'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileContent from '../../components/ProfileContent'


export const metadata = {
    title: `My Profile`,
    description: "Social media but not",
};


export default async function page({ params }) {
    const { userId } = await params

    const [user, posts] = await Promise.all([
        fetchUserbyPostId({ postUserId: userId }),
        fetchUserPosts(),
    ])
    console.log(posts)


    return (
        <div className='bg-[#200c22] text-white pt-12'>
            <div className='border-b-[#a086b2] border-b-2'>
                <ProfileHeader user={user} />
            </div>
            <ProfileContent posts={posts} />
        </div>
    )
}