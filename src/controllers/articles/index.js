// @ts-nocheck
/**
 * All Articles Related Controller
 */
 const { StatusCodes } = require('http-status-codes');
 const { sanitizeUserObject } = require('@helper/user/');
 const logger = require('@helper/logger')('ArticlesController');
 const { ArticleService } = require('@services/index');
 
 
 const ArticleController = {
 
     /**
      * @description Add new articles
      * @param {Object} headers
      */
     addArticle: async(req, res) => {
        try {
            const { user, body, files } = req;
            const rs = await ArticleService.addArticle(user._id, { ...body, file: files });
            return req.successResponseHelper(res, null, rs, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }
     },

     /**
      * @description Get article by slug
      */
     getSingleArticle: async(req, res) => {
        try {
            const { user, params: { slug } } = req;
            const rs = await ArticleService.getArticleBySlug(user && user._id, slug);
            if(rs.error) {
                return req.errorResponseHelper(res, error.message, StatusCodes.BAD_REQUEST);
            }
            return req.successResponseHelper(res, null, rs.response, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }
     },

     /**
      * @description  Delete Article
      */
     deleteArticle: async(req, res) => {
        try {
            const { user, params: { id } } = req;
            const rs = await ArticleService.deleteArticle(user._id, slug);
            return req.successResponseHelper(res, null, rs, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }   
     },

     /**
      * @deescription Like an article
      */
     likeArticle: async(req, res) => {
        try {
            const { user, params: { id } } = req;
            const rs = await ArticleService.likeArticle(id, user._id);
            return req.successResponseHelper(res, null, rs, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }   
     },

     /**
      * @description Unlike an article
      */
      unLikeArticle: async(req, res) => {
        try {
            const { user, params: { id } } = req;
            const rs = await ArticleService.unlikeArticle(id, user._id);
            return req.successResponseHelper(res, null, rs, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }   
     },

    /**
      * @description Get User articles
      */
     getUserArticles: async(req, res) => {
        try {
            const { user } = req;
            const rs = await ArticleService.getUserArticlesList(user._id);
            return req.successResponseHelper(res, null, rs, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }   
     },

    /**
      * @description Get Public articles list
      */
     getPublicArticles: async(req, res) => {
        try {
            const { query: { limit, offset } } = req;
            const rs = await ArticleService.getPublicArticles(limit, offset);
            return req.successResponseHelper(res, null, rs, StatusCodes.OK);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }
     }
   
 };
 
 module.exports = ArticleController;