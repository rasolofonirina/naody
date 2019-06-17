require('express-async-errors');
const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();

const port = process.env.PORT || 7000;
const server = app.listen(port, () => {
    winston.info(`This API works on port ${port}`);
});

module.exports = server;
