/**
 * Common Middlewares for Intializing
 */
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

//Middlewares
const { handleNotFound } = require('@middlewares/errorHandler');

//Handler and helpers
const { localStrategy, JwtStrategy } = require('@helper/passport');
const ApiResponseHelper = require("@middlewares/response");
const AppRoutes = require('@routes/index');

const logger = require('@logger')('Server');

module.exports = (app) => {

    app.enable("trust proxy");

    //Use Cors
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
        next();
    });

    //Options
    app.options('*', function (req,res) { res.sendStatus(200)});

    app.use(require('express').static(path.join(__dirname, '../../client/build')))

    //Passport Intialize
    passport.use('login', localStrategy);
    passport.use('jwt', JwtStrategy);

    // parse json request body
    app.use(bodyParser.json());

    // parse urlencoded request body
    app.use(bodyParser.urlencoded());


        //Assign Success and Error Response handlers to req object
        app.use((req, res, next) => {
            req.successResponseHelper = ApiResponseHelper.successResponse;
            req.errorResponseHelper = ApiResponseHelper.errorResponse;
            req.validationResponseHelper = ApiResponseHelper.validationResponse;
            next();
        })

    //Logs Request method and url middleware
    app.use((req, res, next) => {
        logger.info(`> ${req.method} ${req.url} `);
        next();
    });

    //Initialise Passport
    app.use(passport.initialize());
    app.use(passport.session());
    
    //Initialize All Routes
    AppRoutes(app);

    //Serve Client 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/build', 'index.html'));
    })

    // send back a 404 error for any unknown api request
    app.use(handleNotFound);
}