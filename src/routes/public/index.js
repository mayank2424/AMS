/**
 * Public Routes
 */
 const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});
const { ArticlesController } = require('@controllers/index');
const { checkError } = require('@helper/validation');

 /**
 * @description Get all public articles
 */
router.get('/articles', ArticlesController.getPublicArticles);

router.get('/article/:slug', ArticlesController.getSingleArticle);

module.exports = router;

