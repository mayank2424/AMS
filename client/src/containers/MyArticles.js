// @ts-nocheck
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getUserArticles } from '../actions/article';
import ListArticles from '../components/ListArticles';

const ArticlesWrapper = (props) => {
    const { getUserArticles, articles } = props;

    //Get all the public articles
    useEffect(() => {
        if(!articles.data || !articles.data.length) {
            getUserArticles();
        }
    },[]);
    
    if(articles?.status === 0) {
        return <h1>Loading...</h1>
    }

    if(!articles || !articles.data || !articles.data.length) {
        return <div className='w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono'>
            <h1 className='text-black-500 font-bold text-3xl mb-4'>No articles found!</h1>
        </div>

    }

    return <ListArticles articles={articles.data || []} {...props} message={'My Articles'}/>;
}

const mapStateToProps = (state) => {
    return {
        articles: state.articlesState.articles
    }
}

export default connect(mapStateToProps, {
    getUserArticles
})(ArticlesWrapper);