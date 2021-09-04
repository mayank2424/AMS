/**
 * All Common Middlewares
 */

module.exports = {

    /**
     * @description Assign Global Variables
     */
    assignGlobalVariables: () => {
        global.rootPath = require('path').resolve('./')
    },
    
} 
    