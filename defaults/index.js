const CollectionModel = require('../infrastructure/models/Collection');
const collectionsRepository = new (require('../infrastructure/repositories/collections.repository'))(CollectionModel);

class Defaults {

    collections = new (require('./collections.default'))(collectionsRepository);

    constructor() {

    }

    setDefaults() {
        this.collections.createDefaultCollections()
        .then(result => console.log(result.message, result.documents ? result.documents : ''))
        .catch(console.error);
    }

}

module.exports = Defaults;