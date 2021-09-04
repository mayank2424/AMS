// @ts-nocheck
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux'
import { getSingleArticle, likeArticle, unLikeArticle } from '../actions/article';
import Message from './Message'

const moment = require('moment');

const ArticleRead = (props) => {
    const { getSingleArticle, article, match: { params }, likeArticle, likeArticleData, unLikeArticle, unLikeArticleData } = props;
    const [likedType, likeAction] = useState(null);

    useEffect(() => {
        getSingleArticle({
            slug: params.id
        })
    }, []);

    useEffect(() => {
        if(likeArticleData && likeArticleData.status === 1 && likeArticleData.data) {
            likeAction('like');
        };

    }, [likeArticleData]);

    useEffect(() => {
        if(unLikeArticleData && unLikeArticleData.status === 1 && unLikeArticleData.data) {
            likeAction('unlike');
        }
    }, [unLikeArticleData])

    useEffect(() => {
        if(article.data && article.data?.likes?.includes(props.user?.data?._id)) {
            likeAction('like');
            return;
        }
        likeAction(false);
    }, [article])

    if(article && article.status === 0) {
        return <Message message='Fetching details...'/>
    }

    const likeClickHandler = (type) => {
        if(!props.isAuthenticated || !props.user?.data) {
            toast.error('Please Sign in yourself to like this article');
            return;
        }
        if(type === 'like') {
            likeArticle({
                id: article?.data?._id
            })
        } else {
            unLikeArticle({
                id: article?.data?._id
            })
        }
    };

    const iAmAuthor = () => {
        if(!props.user || !props.user.data) return false;
        if(article.data?.author && props.user.data._id === article.data.author._id) return true;
        return false;
    };
    
    if(!article || !article.data) {
        return <Message message='Something wrong happened...'/>
    }
    const { thumbnail, title, description, createdAt, author } = article?.data;
    return (
        <div className='w-1/2 m-auto p-20 font-mono'>
            <div className='mb-8'>
                <img className='max-h-96 w-full object-cover' src={thumbnail} alt='thumbnail' />
            </div>

            <div className='mb-12 mt-4 text-4xl font-bold'>
                {  title }
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-col'>
                    <span className='text-base italic'>
                            <label className="text-gray-400 font-bold mr-2">Published by:</label> 
                            <span className='bg-blue-500 text-white rounded p-1'>
                                { author?.name }
                            </span>
                    </span><br />
                </div>
                <div className='flex flex-row gap-4'>
                    <span className='text-base italic'><label className="text-gray-400 font-bold">Published:</label> { moment(createdAt).fromNow()}</span>
                    {
                        !iAmAuthor() ? 
                            likedType === 'like' ?
                            <button onClick={() => likeClickHandler("unlike")} className='' title='Unlike this'>
                                <img className='w-6' src="https://res.cloudinary.com/mgdeveloper/image/upload/v1630764039/like_2_k5y4fu.png" alt="unlike_image"/>
                            </button>
                            :
                            <button onClick={() => likeClickHandler("like")} className='' title='Like this'>
                                <img className='w-6' src="https://res.cloudinary.com/mgdeveloper/image/upload/v1630761338/like_ikau7c.png" alt="like_image"/>
                            </button>
                        : null
                    }
                </div>
            </div>
            <div className='mt-4 text-gray-500 leading-loose'>
                {
                    description
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        article: state.articlesState.article,
        likeArticleData: state.articlesState.likeArticle,
        unLikeArticleData: state.articlesState.unlikeArticle
    }
}

export default connect(mapStateToProps, {
    getSingleArticle,
    likeArticle,
    unLikeArticle
})(ArticleRead);