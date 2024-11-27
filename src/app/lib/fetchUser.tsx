import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

// Define the parameter type for fetchUser
type FetchUserParams = {
    postUserId: string;
};

export const fetchUser = async ({ postUserId }: FetchUserParams) => {
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
        return null; // Ensure a return value on error
    }
};
