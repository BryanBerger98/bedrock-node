class CollectionsDefault {

    constructor(collectionsRepository) {
        this.collectionsRepository = collectionsRepository;
    }

    createDefaultCollections() {
        return new Promise((resolve, reject) => {
            this.collectionsRepository.getAllMongoDBCollections()
            .then((collectionsList) => {
                const collections = Object.values(collectionsList).map(el => {
                    return {name: el.name, slug: el.collectionName};
                });
                this.collectionsRepository.createManyCollections(collections)
                .then((createdCollections) => {
                    resolve({
                        message: 'Default collections: Default collections created successfully',
                        documents: createdCollections
                    });
                }).catch((error) => {
                    if (error.code === 11000) {
                        return resolve({
                            message: 'Default collections: Default collections already exist',
                            documents: null
                        });
                    }
                    reject(error);
                });
            }).catch(reject);
        });
    }

}

module.exports = CollectionsDefault;