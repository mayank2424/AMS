// @ts-nocheck
const httpStatus = require('http-status-codes');
const { COMMON } = require('@config/apiResponse');

const ApiResponseHelper = {
    /**
     * @desc Sends Success Response
     * @param { Function } res
     * @param { string } message
     * @param { Object|Array } data
     * @param { number } statusCode
     */
    successResponse: (res, message, data, statusCode) => {
        return res.status(statusCode || httpStatus.OK).json({
            message: message || httpStatus.getStatusText(httpStatus.OK),
            status: true,
            statusCode: statusCode || httpStatus.OK,
            response: data
        })
    },

    /**
     * @desc Send Error Response
     */
    errorResponse: (res, message, statusCode, errors = undefined) => {
        return res.status(statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
            message: message || httpStatus.getStatusText(httpStatus.INTERNAL_SERVER_ERROR),
            status: false,
            statusCode: statusCode ||  httpStatus.INTERNAL_SERVER_ERROR,
            errors
        })
    },

    /**
     * @desc Validation Response
     */
    validationResponse: (res, errors) => {
        return res.status(httpStatus.EXPECTATION_FAILED).json({
            message: COMMON.validationFailed,
            status: false,
            statusCode: httpStatus.EXPECTATION_FAILED,
            errors
        })
    }

}

module.exports = ApiResponseHelper;