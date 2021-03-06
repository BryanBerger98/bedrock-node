const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const pjson = require('./package.json');
const mongoose = require('mongoose');
require('dotenv').config();
const { PORT, MONGODB_URI } = process.env;
const corsMiddleware = require('./middlewares/cors');
const notFoundMiddleware = require('./middlewares/not-found');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const passportMiddleware = require('./middlewares/passport');

app.use(corsMiddleware);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const defaults = new (require('./defaults'))();
defaults.setDefaults();

app.use(passportMiddleware);

app.use('/admin', require('./domain/admin'));
app.use('/auth', require('./domain/authentication'));

app.use(notFoundMiddleware);

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