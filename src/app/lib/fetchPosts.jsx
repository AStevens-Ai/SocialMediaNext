import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

const fetchPosts = async () => {
    try {
        const user = await currentUser();
        if (!user) {
            return [];
        }

        const posts = await db.post.findMany({
            include: {
                tags: true,
            },
        });
        return posts;
    } catch (err) {
        console.error('Error in fetchPosts:', err);
        return [];
    }
};

export const fetchUserPosts = async ({ userId }) => {
    try {
        const user = await currentUser();
        if (!user) {
            return [];
        }
        const dbUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        })

        console.log(dbUser)

        const posts = await db.post.findMany({
            where: {
                userId: userId
            },
            include: {
                tags: true
            }
        })

        return posts
    } catch (err) {
        console.error(err)
    }
}

export default fetchPosts;
