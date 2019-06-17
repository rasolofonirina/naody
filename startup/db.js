const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
    mongoose.connect(config.get('database'), {
        useNewUrlParser: true,
        useCreateIndex: true
    }).then(() => winston.info('Connected to database ...'))
};
