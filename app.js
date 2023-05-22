const express = require('express');
const app = express();
const { resolve } = require('path');
const router = require('./routing');

app.set('view engine', 'pug');
// app.set('views', resolve('views'));

app.use('/static', express.static(resolve('public')));
app.use(router);

module.exports = app;
