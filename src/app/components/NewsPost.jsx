import React from 'react'

function NewsPost({ details, date, headline, category }) {
    return (
        <div key={headline} className="bg-purple-800 border border-purple-500 rounded-lg p-6 max-w-md shadow-lg ">
            <p className="text-blue-400 text-xs font-bold uppercase mb-2">{category}</p>
            <h2 className="text-white text-lg font-semibold mb-4">
                {headline}
            </h2>
            <p className="text-purple-200 text-sm leading-relaxed mb-4">
                {details}
            </p>
            <p className="text-blue-400 text-xs text-right">Published: {date}</p>
        </div>


    )
}

export default NewsPost