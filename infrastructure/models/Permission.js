const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    role_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Role',
        index: true
    },
    collection_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Collection',
        index: true
    },
    create: {
        type: String,
        enum: ['none', 'any', 'owned', 'shared'],
        default: 'none'
    },
    read: {
        type: String,
        enum: ['none', 'any', 'owned', 'shared'],
        default: 'none'
    },
    read_one: {
        type: String,
        enum: ['none', 'any', 'owned', 'shared'],
        default: 'none'
    },
    update: {
        type: String,
        enum: ['none', 'any', 'owned', 'shared'],
        default: 'none'
    },
    delete: {
        type: String,
        enum: ['none', 'any', 'owned', 'shared'],
        default: 'none'
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
});

const PermissionModel = mongoose.model('Permissions', permissionSchema);

module.exports = PermissionModel;