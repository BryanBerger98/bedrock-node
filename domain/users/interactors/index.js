class UsersInteractors {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.updateUser = new (require('./update-user.interactor'))(this.usersRepository);
    }

}

module.exports = UsersInteractors;