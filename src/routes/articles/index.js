/**
 * Articles Router
 */
 const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});
const { ArticlesController } = require('@controllers/index');
const { checkError } = require('@helper/validation');
const multer = require('connect-multiparty')();

 /**
 * @description Get all public articles
 */
router.post('/', multer, ArticlesController.addArticle);

router.delete('/:id', ArticlesController.deleteArticle);

router.get('/', ArticlesController.getUserArticles);

//Like Article
router.put('/like/:id', ArticlesController.likeArticle);

//Unlike
router.put('/unlike/:id', ArticlesController.unLikeArticle);

module.exports = router;

