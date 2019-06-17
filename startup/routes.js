const bodyParser = require('body-parser');
const error = require('../middlewares/error');

const home = require('../routes/home');
const users = require('../routes/users');

module.exports = function(app) {
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use('/', home);
    app.use('/api/v1/users', users);
    app.use(error);
};
