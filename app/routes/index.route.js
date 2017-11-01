import index from '../controllers/index.controller';
var http = require("http");
var bodyParser = require('body-parser');

const path = '/api/index';

module.exports = (app) => {
       app.get('/', index.index);
 
};