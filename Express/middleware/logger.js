const moment = require('moment');

//middleware
const logger = (req, res, next) => {
    // console.log('Hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);//Http,url,original url
    next();
}

module.exports = logger;