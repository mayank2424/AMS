// @ts-nocheck
const { createUniqueHash, signNewToken } = require('@helper/auth/index');
const UserService = require('@services/user');
const { StatusCodes } = require('http-status-codes');
const UserHelper = require('@helper/user');


const AuthService = {
   
    /**
     * @description Sign up user
    * @param {string} email
     */
    signUpUser: async ({ 
        email, 
        password, 
        name,
        user_name, 
        profile_image
    }) => {
        const isUserExist = await UserService.getUserByEmail(email);
        if(!isUserExist) { //Create New user
            const userObj = {
                email,
                password: password ? createUniqueHash(password) : '',
                name,
                user_name: await UserHelper.getUniqueUserNames(user_name),
                profile_image
            }
            const newUser = await UserService.createNewUser(userObj);
            const user = newUser.toJSON();

            return {
                status: true,
                statusCode: StatusCodes.OK,
                result: {
                    ...(UserHelper.sanitizeUserObject(user)),
                    token:signNewToken(newUser._id)
                }
            }
        }
        return {
            status: false,
            statusCode: StatusCodes.BAD_REQUEST,
            result: "User already exist"
        }
    },
};

module.exports = AuthService;