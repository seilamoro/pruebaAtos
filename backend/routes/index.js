const express = require('express');
const app = express();

app.use(require('./post'));
app.use(require('./user'));

module.exports = app;