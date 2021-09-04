/**
 * Auth Related Validators
 */
 const { checkSchema } = require('express-validator');
 
exports.validateSignInRequest = checkSchema({
    email: {
        notEmpty: true,
        isEmail: true,
        errorMessage: "Email is required"
    },
    password: {
        notEmpty: true,
        errorMessage: "Password is required"
    }
})


exports.validateSignUpRequest = checkSchema({
    email: {
        notEmpty: true,
        isEmail: true,
        errorMessage: "Email is required"
    },
    password: {
        notEmpty: true,
        errorMessage: "Password is required"
    },
    user_name: {
        notEmpty: true,
        errorMessage: "Username is required"
    },
    name: {
        notEmpty: true,
        errorMessage: "Name is required"
    }
})
