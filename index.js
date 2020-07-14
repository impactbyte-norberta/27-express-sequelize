const express = require('express');
const app = express();

const { PORT } = require('./config');
const localPort = PORT || 5000;
const db = require('./config');

app.get('/', (req, res) => {
    res.send(`Welcome to sequelie & express demo`);
});

if (db) {
    app.listen(localPort, (req, res) => {
        console.log(`Server runs on port ${localPort}`);
    });
}
