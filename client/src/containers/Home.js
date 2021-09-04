// @ts-nocheck
/** Main Home Container */
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllPublicArticles } from '../actions/article';
import ListArticles from '../components/ListArticles';

const Home = (props) => {
    const { getAllPublicArticles, articles } = props;

    //Get all the public articles
    useEffect(() => {
        if(!articles.data || !articles.data.length) {
            getAllPublicArticles();
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

    return <ListArticles {...props} message={'Explore articles from great authors'}/>;
}

const mapStateToProps = (state) => {
    return {
        articles: state.articlesState.publicArticles
    }
}

export default connect(mapStateToProps, {
    getAllPublicArticles
})(Home);