class CollectionsRepository {

    constructor(CollectionModel) {
        this.CollectionModel = CollectionModel;
    }

    createCollection(collection) {
        return new Promise((resolve, reject) => {
            const newCollection = new this.CollectionModel(collection);
            newCollection.save().then(resolve).catch(reject);
        });
    }

    createManyCollections(collections) {
        return new Promise((resolve, reject) => {
            this.CollectionModel.insertMany(collections).then(resolve).catch(reject);
        });
    }

    getAllMongoDBCollections() {
        return new Promise((resolve, reject) => {
            const collections = this.CollectionModel.getMongoCollectionsList();
            resolve(collections);
        });
    }

    getAllCollections() {
        return new Promise((resolve, reject) => {
            this.CollectionModel.find().then(resolve).catch(reject);
        });
    }

    getCollectionById(collectionId) {
        return new Promise((resolve, reject) => {
            this.CollectionModel.findById(collectionId).then(resolve).catch(reject);
        });
    }

    getCollectionBySlug(collectionSlug) {
        return new Promise((resolve, reject) => {
            this.CollectionModel.findOne(collectionSlug).then(resolve).catch(reject);
        });
    }

    getManyCollectionsById(collectionIds) {
        return new Promise((resolve, reject) => {
            this.CollectionModel.find({_id: {$in: collectionIds}}).then(resolve).catch(reject);
        });
    }

    getManyCollectionsBySlug(collectionSlugs) {
        return new Promise((resolve, reject) => {
            this.CollectionModel.find({slug: {$in: collectionSlugs}}).then(resolve).catch(reject);
        });
    }

}

module.exports = CollectionsRepository;