/**
 * User Related Validators
 */
const { StatusCodes } = require('http-status-codes');
const { checkSchema } = require('express-validator');


exports.addArticle = checkSchema({
    title: {
        notEmpty: {
            errorMessage: 'Please provide title'
        }
    },
    description: {
        notEmpty: {
            errorMessage: 'Please provide description'
        }
    }
})

exports.getArticleBySlug = checkSchema({
    slug: {
        in: 'params',
        notEmpty: {
            errorMessage: 'Please provide slug'
        }
    }
})

exports.likeArticle = checkSchema({
    id: {
        in: 'params',
        isMongoId: {
            errorMessage: 'Please provide valid article id'
        }
    }
});

exports.unlikeArticle = checkSchema({
    id: {
        in: 'params',
        isMongoId: {
            errorMessage: 'Please provide valid article id'
        }
    }
});