class RoleRepository {

    constructor(RoleModel) {
        this.RoleModel = RoleModel;
    }

    createRole(role) {
        return new Promise((resolve, reject) => {
            const newRole = new this.RoleModel(role);
            newRole.save().then(resolve).catch(reject);
        });
    }

    createManyRoles(roles) {
        return new Promise((resolve, reject) => {
            this.RoleModel.insertMany(roles).then(resolve).catch(reject);
        });
    }

    getAllRoles() {
        return new Promise((resolve, reject) => {
            this.RoleModel.find().then(resolve).catch(reject);
        });
    }

    getAllRolesAndPermissions() {
        return new Promise((resolve, reject) => {
            this.RoleModel.find().populate('permission').then(resolve).catch(reject);
        })
    }

    getRoleById(roleId) {
        return new Promise((resolve, reject) => {
            this.RoleModel.findById(roleId).then(resolve).catch(reject);
        });
    }

    getRoleAndPermissionByRoleId(roleId) {
        return new Promise((resolve, reject) => {
            this.RoleModel.findById(roleId).populate('permission').then(resolve).catch(reject);
        });
    }

    getRoleBySlug(roleSlug) {
        return new Promise((resolve, reject) => {
            this.RoleModel.findOne(roleSlug).then(resolve).catch(reject);
        });
    }

    getRoleAndPermissionByRoleSlug(roleSlug) {
        return new Promise((resolve, reject) => {
            this.RoleModel.findOne(roleSlug).populate('permission').then(resolve).catch(reject);
        });
    }

    getManyRolesById(roleIds) {
        return new Promise((resolve, reject) => {
            this.RoleModel.find({_id: {$in: roleIds}}).then(resolve).catch(reject);
        });
    }

    getManyRolesAndPermissionsByRoleIds(roleIds) {
        return new Promise((resolve, reject) => {
            this.RoleModel.find({_id: {$in: roleIds}}).populate('permission').then(resolve).catch(reject);
        });
    }

    getManyRolesBySlug(roleSlugs) {
        return new Promise((resolve, reject) => {
            this.RoleModel.find({slug: {$in: roleSlugs}}).then(resolve).catch(reject);
        });
    }

    getManyRolesAndPermissionsByRoleSlugs(roleSlugs) {
        return new Promise((resolve, reject) => {
            this.RoleModel.find({slug: {$in: roleSlugs}}).populate('permission').then(resolve).catch(reject);
        });
    }

}

module.exports = RoleRepository;