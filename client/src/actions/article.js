/** Article Related actions */

import APIS from '../utils/apis';
import { PushTo, request } from '../utils/helper';
import toast from 'react-hot-toast';

export const addNewArticle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_ARTICLE',
            status: 0
        });
        request(APIS.articles.add.url, {
            method: 'POST',
            headers: {},
            body: payload
        })
        .then(rs => {
            console.log({rs});
            if(rs.statusCode === 200 || rs.statusCode === 201) {
                dispatch({
                    type: 'SET_ADD_ARTICLE',
                    response: rs?.response,
                    status: 1
                });
                toast.success('New Article Published Successfully');
                PushTo('/')
                
            } else {
                dispatch({  
                    type: 'SET_ADD_ARTICLE',
                    response: 'Oops, Something bad happened',
                    status: -1
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_ADD_ARTICLE',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}


export const getAllPublicArticles = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_PUBLIC_ARTICLES',
            status: 0
        });
        request(APIS.articles.getAll.url, {
            method: 'GET',
            headers: {}
        })
        .then(rs => {
            if(rs.statusCode === 200 || rs.statusCode === 201) {
                dispatch({
                    type: 'SET_PUBLIC_ARTICLES',
                    response: rs?.response,
                    status: 1
                });
                
            } else {
                dispatch({  
                    type: 'SET_PUBLIC_ARTICLES',
                    response: 'Oops, Something bad happened',
                    status: -1
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_PUBLIC_ARTICLES',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}

export const getUserArticles = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_ALL_ARTICLES',
            status: 0
        });
        request(APIS.articles.getUserArticles.url, {
            method: 'GET',
            headers: {}
        })
        .then(rs => {
            if(rs.statusCode === 200 || rs.statusCode === 201) {
                dispatch({
                    type: 'SET_ALL_ARTICLES',
                    response: rs?.response,
                    status: 1
                });
                
            } else {
                dispatch({  
                    type: 'SET_ALL_ARTICLES',
                    response: 'Oops, Something bad happened',
                    status: -1
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_ALL_ARTICLES',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}


export const getSingleArticle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'GET_SINGLE_ARTICLE',
            status: 0
        });
        request(APIS.articles.getSingleArticle.url(payload.slug), {
            method: 'GET',
            headers: {}
        })
        .then(rs => {
            if(rs.statusCode === 200 || rs.statusCode === 201) {
                dispatch({
                    type: 'SET_SINGLE_ARTICLE',
                    response: rs?.response,
                    status: 1
                });
                
            } else {
                dispatch({  
                    type: 'SET_SINGLE_ARTICLE',
                    response: 'Oops, Something bad happened',
                    status: -1
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_SINGLE_ARTICLE',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}

export const likeArticle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'LIKE_ARTICLE',
            status: 0
        });
        request(APIS.articles.likeArticle.url(payload.id), {
            method: 'PUT',
            headers: {}
        })
        .then(rs => {
            if(rs.statusCode === 200) {
                dispatch({
                    type: 'SET_LIKE_ARTICLE',
                    response: rs?.response,
                    status: 1
                });
                
            } else {
                dispatch({  
                    type: 'SET_LIKE_ARTICLE',
                    response: 'Oops, Something bad happened',
                    status: -1
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_LIKE_ARTICLE',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}


export const unLikeArticle = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'UNLIKE_ARTICLE',
            status: 0
        });
        request(APIS.articles.unlikeArticle.url(payload.id), {
            method: 'PUT',
            headers: {}
        })
        .then(rs => {
            if(rs.statusCode === 200) {
                dispatch({
                    type: 'SET_UNLIKE_ARTICLE',
                    response: rs?.response,
                    status: 1
                });
                
            } else {
                dispatch({  
                    type: 'SET_UNLIKE_ARTICLE',
                    response: 'Oops, Something bad happened',
                    status: -1
                })
            }
        })
        .catch(err => {
            dispatch({
                type: 'SET_UNLIKE_ARTICLE',
                response: 'Oops Something bad happened',
                status: -1
            })
        })
    }
}






