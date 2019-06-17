const  winston = require('winston');
const config = require('config');

module.exports = function() {
    winston.info(config.get('name'));
};
