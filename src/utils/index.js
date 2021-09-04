/**
 * Root Utils
 */
const { ENV } = require('@config/appConfig');
const slug = require('slug');
const { nanoid } = require('nanoid');

const Utils = {
    isDevEnv: () => ENV === 'DEVELOPMENT',

    generateSlugFromString: (string) => {
        return slug(string, '_') + `_${nanoid(6)}`
    }
};

module.exports = Utils;