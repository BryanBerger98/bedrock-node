class UsersController {

    constructor(usersInteractors) {
        this.usersInteractors = usersInteractors;
        this.createUser = new (require('./create-user.controller'))(this.usersInteractors);
        this.deleteUser = new (require('./delete-user.controller'))(this.usersInteractors);
        this.deleteManyUsers = new (require('./delete-many-users.controller'))(this.usersInteractors);
        this.getAllUsers = new (require('./get-all-users.controller'))(this.usersInteractors);
        this.getAllUsersCount = new (require('./get-all-users-count.controller'))(this.usersInteractors);
        this.getUserByEmail = new (require('./get-user-by-email.controller'))(this.usersInteractors);
        this.getUserById = new (require('./get-user-by-id.controller'))(this.usersInteractors);
        this.switchDisableUserState = new (require('./switch-disable-user-state.controller'))(this.usersInteractors);
        this.updateUser = new (require('./update-user.controller'))(this.usersInteractors);
    }

}

module.exports = UsersController;