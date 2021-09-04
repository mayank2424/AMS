// @ts-nocheck
/**
 * All User Related Controller
 */
const { StatusCodes } = require('http-status-codes');
const { sanitizeUserObject } = require('@helper/user/');
const logger = require('@helper/logger')('UserController');
const { UserService, AuthService } = require('@services/index');


const UserController = {

    /**
     * @description Get Current User
     * @param {Object} headers
     */
    getCurrentUser: async (req, res) => {
        try {
            const { user } = req;
            const userObj = sanitizeUserObject(user);
            return req.successResponseHelper(res, null, userObj);
        } catch(error) {
            return req.errorResponseHelper(res, error.message);
        }
    },
};

module.exports = UserController;