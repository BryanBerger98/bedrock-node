const express = require('express');
const app = express();

app.use((req, res) => {
    const err = new Error('404 - not found !!');
    err.status = 404;
    res.status(404).json({
        msg: '404 - not found !!',
        err: err
    });
});

module.exports = app;