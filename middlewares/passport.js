const express = require('express');
const app = express();
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy
const UserModel = require('../domain/authentication/models/User');

app.use(passport.initialize());

function cookieExtractor (req) {
    const token = req && req.cookies ? req.cookies.access_token : null;
    return token;
}

const jwtStrategy = new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET
}, (jwt_payload, next) => {
    UserModel.findOne({ _id: jwt_payload.id }, (err, user) => {
        if (err) {
            return next(err, false);
        }
        if (user) {
            if (user.disabled) return next(new Error('Your account is disabled'), false);
            return next(null, user);
        } else {
            return next(null, false);
        }
    });
});

passport.use(jwtStrategy);

module.exports = app;