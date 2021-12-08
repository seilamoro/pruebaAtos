const express = require('express');
const app = express();

app.use(require('./post'));

module.exports = app;