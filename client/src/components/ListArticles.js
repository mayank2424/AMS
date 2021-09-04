// @ts-nocheck
import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = (props) => {
    const { articles } = props;
    return (
        <div className='w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono'>
            <h1 className='text-blue-500 font-bold text-3xl mb-4'>
                { props.message }
            </h1>
            <div className='flex flex-wrap gap-6 justify-center'>
                {
                    (articles.data || []).map(article => (
                        <ArticleCard 
                            key={article._id}
                            thumbnail={article.thumbnail}
                            title={article.title}
                            description={article.description}
                            likesCount={article?.likes?.length || 0}
                            authorName={article.author?.name || article.author?.user_name}
                            authorProfile={article.author?.profile_image}
                            publishedTime={article.createdAt}
                            slug={article.slug}
                            history={props.history}
                            is_private={article.is_private}
                            likesCount={article?.likes?.length}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ArticlesList;