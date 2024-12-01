import React from 'react'
import NewsPost from '../components/NewsPost'
import news from '../../../public/news.json'

function NewsPosts() {
    return (
        <div className='flex gap-4 flex-col'>
            {news.news.map((post) => (
                <div key={post.id}>
                    <NewsPost category={post.category} headline={post.headline} details={post.details} date={post.date} />
                </div>
            ))}
        </div>
    )
}

export default NewsPosts