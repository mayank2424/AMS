// @ts-nocheck
/**
 * User Routes
 */
const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});
const { UserController } = require('@controllers/index');


 /**
 * @dessription Get Current User route
 */
router.route('/currentUser')
    .get(UserController.getCurrentUser);

module.exports = router;
