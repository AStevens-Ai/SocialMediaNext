// src/app/components/FetchUserHeader.jsx
'use server'
import { checkUser } from '../lib/checkUser'; // Server-side logic
import RootLayout from '../layout'; // The RootLayout component (Client-side)

export default async function FetchUserHeader({ children }) {
    // Fetch user data on the server
    const user = await checkUser();
    console.log('User in FetchUserHeader:', user);

    // Return the RootLayout component and pass the user data as props
    return (
        <RootLayout user={user}>
            {children}
        </RootLayout>
    );
}
