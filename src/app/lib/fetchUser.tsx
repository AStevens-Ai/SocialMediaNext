import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

type FetchUserParams = {
    postUserId: string;
};

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

export const fetchUser = async () => {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    try {
        const dbUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id
            }
        })

        return dbUser;
    } catch (err) {
        console.error(err)
        return
    }

}
