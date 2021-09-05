
const { uploadFileToCloud } = require('@helper/file');
const { ArticleModel } = require('@models/index');
const { generateSlugFromString } = require('@utils/index');

const ArticlesService = {

    /**
     * @description Get all articles list
     */
    getUserArticlesList: async (user, limit, offset) => {
        const $query = {
            is_active: true,
            author: user._id
        };

        const $toPopulate = [
            { 
                path: 'author',
                select: '_id name user_name profile_image'
            },
            {
                path: 'likes',
                select: '_id name profile_image user_name'
            }
        ];
        const $toSelect = ['_id title description tags likes is_private thumbnail createdAt slug']
        const response = await ArticleModel.readSelectedByKey($query, $toSelect, $toPopulate, { createdAt: -1});
        return response;
    },

    /**
     * 
     * @param {*} userId 
     * @param {*} payload 
     * @returns 
     */
    getPublicArticles: async(limit, offset) => {
        const $toPopulate = [
            { 
                path: 'author',
                select: '_id name user_name profile_image'
            },
            {
                path: 'likes',
                select: '_id name profile_image user_name'
            }
        ];
        const $toSelect = ['_id title description tags likes is_private thumbnail createdAt slug'];
        const response = await ArticleModel.readSelectedByKey({
            is_active: true,
            is_private: {
                $ne: true
            }
        }, $toSelect, $toPopulate, { createdAt: -1});
        return response;
    },

    /**
     * @description Add new article
     */
    addArticle: async (userId, payload) => {
        const { title, description, tags, file = {}, is_private } = payload;
        const slug = generateSlugFromString(title);
        const uploadImage = await uploadFileToCloud(file.thumbnail.path);
        const response = {
            author: userId,
            title,
            description,
            thumbnail: uploadImage && uploadImage.url,
            slug,
            tags,
            is_private
        };
        const result = await ArticleModel.create(response);
        return result;
    },

     /**
     * @description Delete article
     */
      deleteArticle: (userId, id) => {
        const $query = {
            author: userId,
            _id: id
        };
        return ArticleModel.delete($query);
    },

    /**
     * @description Get Article by slug
     */
    getArticleBySlug: async (userId, slug) => {
        const $query = {
            // owner: userId,
            slug,
            is_active: true,
        };
        const $toPopulate = [
            {
                path: 'author',
                select: '_id name user_name'
            }
        ];
        const $toSelect = [
            '_id title thumbnail likes tags slug createdAt description author'
        ]
        const response = await ArticleModel.readOneByKey($query, $toSelect, $toPopulate);
        if(response && response.is_private && !userId) {
            return {
                error: true,
                response: "You dont't have access to view this article. Please signup first"
            }
        };
        return { error: false, response: response }
    },

      /**
     * @description Like/Unlike article
     */
    likeArticle: async(articleId, user) => {
        return ArticleModel.update({
            _id: articleId
        },{ $addToSet: {
            likes: user
        }})
    },

    /**
     * @description Like/Unlike article
     */
    unlikeArticle: async(articleId, user) => {
        return ArticleModel.update({
            _id: articleId
        },{ $pull: {
            likes: user
        }})
    },

};

module.exports = ArticlesService;