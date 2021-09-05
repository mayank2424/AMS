/**
 * @descriptiion Auth Middleware
 */
const passport = require('passport');
const { StatusCodes, getStatusText } = require('http-status-codes');
const { SECRET_KEY } = require('@config/appConfig');

/**
 * @description Public aut middleware
 */
exports.publicAuthMiddleware = (req, res, next) => {
    // @ts-ignore
    passport.authenticate('jwt', async(err, user, info) => {
        if(!user) {
            return req.errorResponseHelper(res, getStatusText(StatusCodes.UNAUTHORIZED), StatusCodes.UNAUTHORIZED);
        }
        req.user = user;
        next();
    }, { session: false })(req, res, next)
};