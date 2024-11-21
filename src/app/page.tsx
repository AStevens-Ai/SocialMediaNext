import Feed from './components/Feed'
import NewPost from './components/newPost'

export default function Home() {
  return (
    <div className="flex justify-center">
      <Feed />
      <div className='fixed bottom-4 right-4 p-2 primary rounded-lg'>
        <NewPost />
      </div>
    </div>
  );
}
