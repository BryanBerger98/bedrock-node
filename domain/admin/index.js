const express = require('express');
const app = express();
const passport = require('passport');

const users = require('./users');

app.use('/users', passport.authenticate('jwt', {session: false}), users);

module.exports = app;