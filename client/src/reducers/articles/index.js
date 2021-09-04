/* eslint-disable default-case */
/** User State Reducer */

const initialState = {
    articles: {
        data: null,
        status: null
    },
    article: {
        data: null,
        status: null,
    },
    addArticle: {
        data: null,
        status: null
    },
    publicArticles: {
        data: null,
        status: null
    },
    likeArticle:{
        data: null,
        status: null
    },
    unlikeArticle: {
        data: null,
        status: null
    }
};

const types = {
    GET_ALL_ARTICLES: 'GET_ALL_ARTICLES',
    SET_ALL_ARTICLES: 'SET_ALL_ARTICLES',
    GET_PUBLIC_ARTICLES: 'GET_PUBLIC_ARTICLES',
    SET_PUBLIC_ARTICLES: 'SET_PUBLIC_ARTICLES',
    GET_SINGLE_ARTICLE: 'GET_SINGLE_ARTICLE',
    SET_SINGLE_ARTICLE: 'SET_SINGLE_ARTICLE',
    ADD_ARTICLE: 'ADD_ARTICLE',
    SET_ADD_ARTICLE: 'SET_ADD_ARTICLE',
    RESET: 'RESET',
    LIKE_ARTICLE: 'LIKE_ARTICLE',
    SET_LIKE_ARTICLE: 'SET_LIKE_ARTICLE',
    UNLIKE_ARTICLE: 'UNLIKE_ARTICLE',
    SET_UNLIKE_ARTICLE: 'SET_UNLIKE_ARTICLE'
}

const articlesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ALL_ARTICLES: 
          return Object.assign({}, state, {
            articles: {
                data: null,
                status: 0,
            }
        });
        case types.SET_ALL_ARTICLES:
          return Object.assign({}, state, {
            articles: {
                data: action.response,
                status: action.status,
            }
        })
        case types.GET_SINGLE_ARTICLE: 
        return Object.assign({}, state, {
          article: {
              data: null,
              status: 0,
          }
      });
      case types.SET_SINGLE_ARTICLE:
        return Object.assign({}, state, {
          article: {
              data: action.response,
              status: action.status,
          }
      })

      case types.ADD_ARTICLE:
        return Object.assign({}, state, {
            addArticle: {
              data: null,
              status: 0,
          }
      })

      case types.SET_ADD_ARTICLE:
        return Object.assign({}, state, {
            addArticle: {
              data: action.response,
              status: action.status,
          }
      })

      case types.GET_PUBLIC_ARTICLES:
        return Object.assign({}, state, {
            publicArticles: {
                data: null,
                status: 0,
            }
        })

        case types.SET_PUBLIC_ARTICLES:
            return Object.assign({}, state, {
                publicArticles: {
                    data: action.response,
                    status: action.status,
                }
            });
        case types.RESET:
            return Object.assign({}, {
                articles: {
                    data: null,
                    status: null
                },
                article: {
                    data: null,
                    status: null,
                },
                addArticle: {
                    data: null,
                    status: null
                },
                publicArticles: {
                    data: null,
                    status: null
                }
            })
        case types.LIKE_ARTICLE:
            return Object.assign({}, state, {
                likeArticle: {
                    data: null,
                    status: 0,
                }
            });
        
        case types.SET_LIKE_ARTICLE:
            return Object.assign({}, state, {
                likeArticle: {
                    data: action.response,
                    status: action.status,
                }
            });

            case types.UNLIKE_ARTICLE:
                return Object.assign({}, state, {
                    unlikeArticle: {
                        data: null,
                        status: 0,
                    }
                });
            
            case types.SET_UNLIKE_ARTICLE:
                return Object.assign({}, state, {
                    unlikeArticle: {
                        data: action.response,
                        status: action.status,
                    }
                });
        
        default: 
            return state;
    }   
 }

 export default articlesReducer;