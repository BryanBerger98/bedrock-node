const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = process.env;

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    action: {
        type: String,
        required: true,
        enum: ['authentication', 'reset_password', 'account_verification']
    },
    expiration_date: {
        type: Date,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
});

tokenSchema.statics = {
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET, (err, payload) => {
                if (err) return reject(err);
                resolve(payload);
            })
        });
    }
}

module.exports = mongoose.model('Token', tokenSchema);