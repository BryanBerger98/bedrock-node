const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const pjson = require('./package.json');
const mongoose = require('mongoose');
require('dotenv').config();
const { PORT, MONGODB_URI } = process.env;

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(MONGODB_URI, mongoOptions)
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((error) => {
    if (error) {
        console.error('MongoDB Error:', error);
        process.exit(1);
    }
});

server.listen(PORT, () => {
    console.log(`Started version ${pjson.version} on port ${PORT}`);
});