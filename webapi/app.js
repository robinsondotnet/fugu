const express = require('express');
const bodyParser = require('body-parser');
const addErrorHandler = require('./middlewares/addErrorHandler');

const app = new express();

app.use(bodyParser.json());

app.use('/api', require('./api'));

addErrorHandler(app);

module.exports = app;