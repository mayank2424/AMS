// @ts-nocheck
/**
 * Main Server Intialization
 */
 const { assignGlobalVariables } = require('@middlewares/index');
 assignGlobalVariables();
 const app = require('express')();
 const logger = require('@logger')('Server');
 const AppIntializer = require('@middlewares/initial');
 
 //Initialize app middlewares/routes/sentry/parser
 AppIntializer(app);
 
 module.exports = app;