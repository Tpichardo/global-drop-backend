const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.status(200).json({ data: 'Welcome to the global-drop API!' })
});

module.exports = app;

