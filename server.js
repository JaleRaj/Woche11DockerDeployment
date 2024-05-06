'use strict';

const express = require('express');
const path = require('path');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
