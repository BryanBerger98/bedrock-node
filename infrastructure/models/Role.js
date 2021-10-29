const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true,
        unique: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
});

const RoleModel = mongoose.model('Role', roleSchema);

module.exports = RoleModel;