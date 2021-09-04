/**
 * Main Route File, Intialize all routes
 */
const V1Router = require('./V1');

module.exports = (app) => {
    app.use('/api/v1', V1Router);
}