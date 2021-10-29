class RolesDefault {

    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }

    createDefaultRoles() {
        return new Promise((resolve, reject) => {
            this.rolesRepository.createManyRoles([
                {name: 'Administrateur', slug: 'admin'}
            ])
            .then((roles) => {
                resolve({
                    message: 'Default roles: Default roles created successfully',
                    documents: roles
                });
            }).catch((error) => {
                if (error.code === 11000) {
                    return resolve({
                        message: 'Default roles: Default roles already exist',
                        documents: null
                    });
                }
                reject(error);
            });
        });
    }

}

module.exports = RolesDefault;