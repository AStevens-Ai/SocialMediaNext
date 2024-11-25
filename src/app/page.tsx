import { SignedIn, SignedOut } from '@clerk/nextjs';
import Feed from './components/Feed'
import NewPost from './components/NewPost'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hows it gonna be?",
  description: "Social media but not",
};

export default function Home() {
  return (

    <div className="flex justify-center">
      <SignedIn>
        <Feed />
        <div className='fixed bottom-4 right-4 p-2 bg-purple-600 hover:bg-purple-700 rounded-lg'>
          <NewPost />
        </div>
      </SignedIn>
      <SignedOut>
        <p className="text-lg flex justify-center items-center h-screen p-5">Please sign in or sign up to view the feed.</p>
      </SignedOut>
    </div>

  );
}
