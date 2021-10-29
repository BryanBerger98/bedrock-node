const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String
    },
    username: {
        type: String
    },
    photo_url: {
        type: String
    },
    disabled: {
        type: Boolean,
        default: false
    },
    provider_data: {
        type: String
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
});

userSchema.statics = {
    exists ({email}) {
        this.findOne({email}).exec()
        .then((user) => {
            return user ? true : false;
        });
    },
    comparePassword (candidatePassword, password) {
        return bcrypt.compare(candidatePassword, password);
    },
    generatePassword() {
        const passwordLength = 12;
        const passwordCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#&-_/$*!?=.+^';
        let generatedPassword = '';
        for (let i = 0, n = passwordCharset.length; i < passwordLength; ++i) {
            generatedPassword += passwordCharset.charAt(Math.floor(Math.random() * n));
        }
        return generatedPassword;
    },
    hashPassword(password) {
        return bcrypt.hash(password, 12)
    },
    createToken(user, expirationDate, resetPasswordToken, validationAccountToken) {
        const token = jwt.sign({
            id: user._id,
            email: user.email,
            exp: expirationDate ? expirationDate : Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
            resetPasswordToken: resetPasswordToken ? resetPasswordToken : false,
            validationAccountToken: validationAccountToken ? validationAccountToken : false
        }, JWT_SECRET);
        return token;
    },
    newObjectId(str) {
        return new mongoose.Types.ObjectId(str);
    }
}

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;