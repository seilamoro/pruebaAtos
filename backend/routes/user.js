const fetch = require('node-fetch');
const express = require('express');

const app = express();

app.get('/users', function(req, res) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(async (json) => {
        res.json({
            ok: true,
            data: json
        });
    });
});

module.exports = app;