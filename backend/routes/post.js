const fetch = require('node-fetch');
const express = require('express');

const app = express();

app.get('/posts', function(req, res) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(async (json) => {
        let data = await Promise.all(json.map(async value => {
            const comments = await fetchComments(value.id);
            const userData = await fetchUser(value.userId);
            return value = {
                ...value,
                comments: comments,
                userData: userData
            };
        }));
        res.json({
            ok: true,
            data: data
        });
    });
});

app.get('/posts/:userId', function(req, res) {
    let userId = req.params.userId;

    fetch('https://jsonplaceholder.typicode.com/users/'+userId+'/posts')
    .then((response) => response.json())
    .then(async (json) => {
        let data = await Promise.all( json.map(async value => {
            const comments = await fetchComments(value.id);
            const userData = await fetchUser(value.userId);
            return value = {
                ...value,
                comments: comments,
                userData: userData
            };
        }));

        res.json({
            ok: true,
            data: data
        });
    });
});

async function fetchComments(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments');
    const comments = await response.json();
    return comments;
}

async function fetchUser(id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
    const userData = await response.json();
    return userData;
}

app.post('/posts', function(req, res) {
    let data = req.body;

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.userId,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        res.json({
            ok: true,
            data: json
        });
    });
});


app.put('/posts', function(req, res) {
    let data = req.body;

    fetch('https://jsonplaceholder.typicode.com/posts/'+data.id, {
    method: 'PUT',
    body: JSON.stringify({
        id: data.id,
        title: data.title,
        body: data.body,
        userId: data.userId,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        res.json({
            ok: true,
            data: json
        });
    });
});  

module.exports = app;