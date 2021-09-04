/**
 * All V1 routes land here
 */
const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});

const AuthRouter = require('../Auth');
const UserRouter = require('../user');
const ArticlesRouter = require('../articles');
const PublicRouter = require('../public');

//Middlewares
const { publicAuthMiddleware } = require('@middlewares/auth');

router.get('/', (req, res) => res.status(200).json({
    status: 200,
    response: 'OK'
}))
router.use('/auth', AuthRouter);
router.use('/user', publicAuthMiddleware, UserRouter);
router.use('/article', publicAuthMiddleware, ArticlesRouter);
router.use('/p', PublicRouter);

module.exports = router;