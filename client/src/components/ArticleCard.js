// @ts-nocheck
import React from 'react';
const moment = require('moment');

const ArticleCard = (props) => {
    const { 
        thumbnail, 
        title, 
        description, 
        likesCount, 
        authorName,
        authorProfile, 
        publishedTime, 
        slug,
        history,
        is_private, 
        deleteArticleAction,
        user,
        author,
        context
    } = props;

    return (
        <div 
            className='max-w-xl w-full px-4 py-3 bg-white shadow-md rounded-md my-8 cursor-pointer'>
            <div className="flex justify-between items-center">
                <div className="text-sm font-light flex flex-row gap-2 items-center">
                    <span className='w-full'>
                        <img className='w-7' src={authorProfile} alt='author_profile'/>
                    </span>
                    <span className='w-16' style={{minWidth: '120px'}}>
                        { authorName }
                    </span>
                </div>
                <div className='flex gap-3'>
                    {
                        context && context === 'my' && author?._id && user?._id && user?._id === author._id ? <span onClick={deleteArticleAction} >
                            <img className='w-5' src="https://res.cloudinary.com/mgdeveloper/image/upload/v1630854601/trash_gumczn.png" alt='delete_icon'/>
                        </span> : null
                    }
                    {
                        is_private 
                            ? <span className='text-xs ml-2 bg-yellow-600 p-1 rounded-md text-white'>Private</span> 
                            : <span className='text-xs ml-2 bg-green-600 p-1 rounded-md text-white'>Public</span> 
                    }
                    <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full uppercase text-xs">
                        Tags
                    </span>
                </div>
            </div>

            <div 
             onClick={() => history.push(`/article/${slug}`)}
            className='flex flex-row flex-auto mt-3 items-center justify-between gap-4'>
                <div>
                    <div>
                        <h1 className="text-lg font-semibold mt-2 max-w-full" style={{
                            textOverflow: 'ellipsis', 
                            overflow: 'hidden', 
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            display: '-webkit-box',
                            wordWrap: 'break-all',
                            wordBreak: 'break-all',
                            }}>
                            { title }
                        </h1>
                        <p className="text-gray-600 text-sm mt-2 overflow-ellipsis max-w-full" style={{
                            textOverflow: 'ellipsis', 
                            overflow: 'hidden', 
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 5,
                            display: '-webkit-box',
                            wordWrap: 'break-all',
                            wordBreak: 'break-all',
                            }}>
                            { description }
                        </p>
                    </div>
                    <div className='mt-3 flex justify-between'>
                        <span className='text-xs'><label className="text-gray-400 font-bold">Published:</label> { moment(publishedTime).fromNow()}</span> 
                        <span className='text-xs text-blue-800 font-bold'>
                            {
                                likesCount > 0 ? `Likes ${likesCount}` : null
                            }
                        </span>
                    </div>
                </div>
                <div className="min-w-1/5">
                    <img alt='thumbnail' style={{height: '180px'}} className='m-auto' src={thumbnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFSgdhQvBlZO6I8s-jtKIYOED1NqEs4xEjA&usqp=CAU" }/>
                </div>
            </div>
        </div>
    )
};

export default ArticleCard;