class PermissionsRepository {

    constructor(PermissionModel) {
        this.PermissionsModel = PermissionModel;
    }

    createPermission(permission) {
        return new Promise((resolve, reject) => {
            const newPermission = new this.PermissionModel(permission);
            newPermission.save().then(resolve).catch(reject);
        });
    }

    createManyPermissions(permissions) {
        return new Promise((resolve, reject) => {
            this.PermissionModel.insertMany(permissions).then(resolve).catch(reject);
        });
    }

    getAllPermissions() {
        return new Promise((resolve, reject) => {
            this.PermissionModel.find().then(resolve).catch(reject);
        });
    }

    getPermissionById(permissionId) {
        return new Promise((resolve, reject) => {
            this.PermissionModel.findById(permissionId).then(resolve).catch(reject);
        });
    }

    getPermissionBySlug(permissionSlug) {
        return new Promise((resolve, reject) => {
            this.PermissionModel.findOne(permissionSlug).then(resolve).catch(reject);
        });
    }

    getManyPermissionsById(permissionIds) {
        return new Promise((resolve, reject) => {
            this.PermissionModel.find({_id: {$in: permissionIds}}).then(resolve).catch(reject);
        });
    }

    getManyPermissionsBySlug(permissionSlugs) {
        return new Promise((resolve, reject) => {
            this.PermissionModel.find({slug: {$in: permissionSlugs}}).then(resolve).catch(reject);
        });
    }

}

module.exports = PermissionsRepository;