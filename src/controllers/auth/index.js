// @ts-nocheck
/**
 * All Aauth Route Controller Lands Here
 */
const { StatusCodes, getStatusText } = require('http-status-codes');
const passport = require('passport');
const { signNewToken } = require('@helper/auth/index');
const UserHelper = require('@helper/user/');
const { AuthService } = require('@services/');
const logger = require('@helper/logger')('AuthController');


const AuthController = {

    /**
     * @description SignIn Controller
     */
    signIn: (req, res, next) => {
        //Use passport local authenticate method
        passport.authenticate('login', { session: false }, (info, user, error) => {
            
            if(error) {
                const { message } = error;
                logger.error(`[signIn] Error while login:`);
                return req.errorResponseHelper(res, message, StatusCodes.BAD_REQUEST);
            }
            req.login(user, { session: false }, (err, e) => {
                if(err) {
                    logger.error(`[signIn] Error while login:`);
                    return req.errorResponseHelper(res, err,  StatusCodes.INTERNAL_SERVER_ERROR);
                }
                if(!user) return req.errorResponseHelper(res, "User not found", StatusCodes.BAD_REQUEST);
                const token = signNewToken(user._id);
                const response = { ...Object.assign(UserHelper.sanitizeUserObject(user)), token };
                return req.successResponseHelper(res, 
                    getStatusText(StatusCodes.OK), 
                    response, 
                    StatusCodes.OK);
            })
           
        })(req, res, next);
    },

    /**
     * @description SignUp Controller
     * @param {req} Object
     * @param { res} Object
     * @param {next} Function
     */
        signUp: async (req, res, next) => {
            try { 
                const { email, password, name, user_name } = req.body;
                const { status, statusCode, result } = await AuthService.signUpUser({ 
                    email, password, name, user_name     
                });
                if(!status) return req.errorResponseHelper(res, result, StatusCodes.BAD_REQUEST);
                return req.successResponseHelper(res, 
                    getStatusText(statusCode), 
                    result, 
                    statusCode);
            } catch(err) {
                console.log({err})
                logger.error(`[signUp] Error while signin up:`)
                return req.errorResponseHelper(res, err.message,  StatusCodes.INTERNAL_SERVER_ERROR);
            }
        },
}

module.exports = AuthController;