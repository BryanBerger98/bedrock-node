const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
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

collectionSchema.statics = {
    getMongoCollectionsList() {
        return mongoose.connection.collections;
    }
}

const CollectionModel = mongoose.model('Collection', collectionSchema);

module.exports = CollectionModel;