const mongoose = require('mongoose');

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
        enum: ['authentication', 'reset_password', 'email_validation']
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

module.exports = mongoose.model('Token', tokenSchema);