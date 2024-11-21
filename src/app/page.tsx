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
      <Feed />
      <div className='fixed bottom-4 right-4 p-2 bg-purple-600 hover:bg-purple-700 rounded-lg'>
        <NewPost />
      </div>
    </div>
  );
}
