// @ts-nocheck
/**
 * User Routes
 */
const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});
const { isAdmin } = require('@middlewares/auth')
const { UserController } = require('@controllers/index');
const { checkError } = require('@helper/validation');
const { addUser, deleteUser } = require('@validators/user.validator');


 /**
 * @dessription Get Current User route
 */
router.route('/currentUser')
    .get(UserController.getCurrentUser);

module.exports = router;
