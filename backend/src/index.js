const express = require('express');
const { PORT } = require('./config/config');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});