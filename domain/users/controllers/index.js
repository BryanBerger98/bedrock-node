class UsersController {

    constructor(usersInteractors) {
        this.usersInteractors = usersInteractors;
        this.updateUser = new (require('./update-user.controller'))(this.usersInteractors);
    }

}

module.exports = UsersController;