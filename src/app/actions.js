'use server'
import { revalidatePath } from 'next/cache'
import { db } from './lib/db'
import { currentUser } from '@clerk/nextjs/server'


export async function editInformation(previousState, formData) {
    const name = formData.get('name')


    const user = await currentUser()

    if (!user) {
        return null
    }
    try {
        const updatedUser = await db.user.update({
            where: {
                clerkUserId: user.id
            },
            data: {
                name
            }
        })
        console.log(updatedUser)
        revalidatePath('/')
        return "Username Updated"
    } catch (err) {
        console.error(err)
        return "Username failed to update."
    }

}