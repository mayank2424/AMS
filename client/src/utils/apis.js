const url = process.env.NODE_ENV === 'production' ? "/api/v1" : "http://localhost:5000/api/v1"

const APIS = {
    login: {
        url: `${url}/auth/signin`,
    },
    signUp: {
        url: `${url}/auth/signup`,
    },
    getUser: {
        url: `${url}/user/currentUser`
    },
    articles:{
        add: {
            url: `${url}/article/`
        },
        getAll: {
            url: `${url}/p/articles`
        },
        getUserArticles: {
            url: `${url}/article`
        },
        likeArticle: {
            url: (id) => `${url}/article/like/${id}`
        },
        unlikeArticle: {
            url: (id) => `${url}/article/unlike/${id}`
        },
        getSingleArticle: {
            url: (id) => `${url}/p/article/${id}`
        },
        deleteArticle: {
            url: (id) => `${url}/article/${id}`
        }
    }
};

export default APIS;