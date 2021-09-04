/**
 * Auth Routes
 */
const router = require('express').Router({
    caseSensitive : true,
    strict        : true,
});
const { AuthController } = require('@controllers/index');
const { checkError } = require('@helper/validation');
const { validateSignInRequest, validateSignUpRequest } = require('@validators/auth.validator');
const { publicAuthMiddleware } = require('@middlewares/auth')

//All Route methods
 /**
 * @description Main Login Route
 */
router.post('/signin',
    validateSignInRequest,
    checkError,
    AuthController.signIn
);
/**
 * @description Sign Up Route
 */
 router.post('/signup',
     validateSignUpRequest,
     checkError,
     AuthController.signUp)


module.exports = router;

