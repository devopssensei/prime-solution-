const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `env/${process.env.NODE_ENV}.env`)
});


module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'production',
    HOST : process.env.HOST || '13.51.162.199',
    PORT : process.env.PORT || 4000,
    SECRET: process.env.SECRET || 'AAAAA'
}
