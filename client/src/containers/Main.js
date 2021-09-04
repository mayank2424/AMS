// @ts-nocheck
import React from 'react';
import Navbar from '../components/Navbar'
import ArticleEditor from '../components/ArticleEditor';
import Article from '../components/Article';
import MyArticles from './MyArticles';
import Home from './Home'

const Main = (props) => {
    const { type } = props;
    return (
        <div className='w-full h-screen'>
            <Navbar {...props}/>
            {
                type ==='explore' ?  <Home {...props}/> : null   
            }
            {
                type === 'create' ? <ArticleEditor {...props}/> : null
            }
            {
                type === 'article' ? <Article {...props}/> : null
            }
            {
                type === 'my_articles' ? <MyArticles {...props} /> : null
            }
        </div>
    )
};

export default Main;