import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

type FetchUserParams = {
    postUserId: string;
};

type userId = {
    userId: string;
}

type clerkId = {
    clerkId: string;
}

export const fetchUserbyPostId = async ({ postUserId }: FetchUserParams) => {
    try {
        const user = await currentUser();

        if (!user) {
            return null;
        }

        const dbUser = await db.user.findUnique({
            where: {
                id: postUserId,
            },
        });

        return dbUser;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const fetchUser = async ({ userId }: userId) => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const dbUser = await db.user.findUnique({
            where: {
                id: userId
            }
        })

        return dbUser;
    } catch (err) {
        console.error(err)
        return
    }

}

export const fetchUserByClerkId = async ({ clerkId }: clerkId) => {
    const user = await currentUser()

    if (!user) {
        return null;
    }

    try {
        const dbUser = await db.user.findUnique({
            where: {
                clerkUserId: clerkId
            }
        })

        return dbUser;
    } catch (err) {
        console.error(err)
        return
    }
}
