/**
 * Articles Router
 */
 const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});
const { ArticlesController } = require('@controllers/index');
const { checkError } = require('@helper/validation');
const { addArticle, likeArticle, unlikeArticle } = require('@validators/article.validator');
const multer = require('connect-multiparty')();

 /**
 * @description Get all public articles
 */
router.post('/', 
    multer, 
    addArticle,
    checkError,
    ArticlesController.addArticle
);

router.delete('/:id', ArticlesController.deleteArticle);

router.get('/', ArticlesController.getUserArticles);

//Like Article
router.put('/like/:id', 
    likeArticle,
    checkError,
    ArticlesController.likeArticle
);

//Unlike
router.put('/unlike/:id', 
    unlikeArticle,
    checkError,
    ArticlesController.unLikeArticle
);

module.exports = router;

