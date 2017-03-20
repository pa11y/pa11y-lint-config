'use strict';

const config = require('./es6');

// ES5 overrides
config.env.es6 = false;
config.rules['no-var'] = 'off';
config.rules['object-shorthand'] = 'off';
config.rules['prefer-arrow-callback'] = 'off';
config.rules['prefer-const'] = 'off';
config.rules['prefer-rest-params'] = 'off';
config.rules['prefer-spread'] = 'off';
config.rules['prefer-template'] = 'off';

// Export updated ESLint config
module.exports = config;
