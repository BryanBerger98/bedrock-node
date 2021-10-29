class AuthInteractors {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.changeUserPassword = new (require('./change-user-password.interactor'))(this.usersRepository);
        this.deleteAccount = new (require('./delete-account.interactor'))(this.usersRepository);
        this.loginUser = new (require('./login-user.interactor'))(this.usersRepository);
        this.registerUser = new (require('./register-user.interactor'))(this.usersRepository);
        this.getCurrentUser = new (require('./get-current-user.interactor'))(this.getCurrentUser);
        this.updateAccount = new (require('./update-account.interactor'))(this.usersRepository);
    }

}

module.exports = AuthInteractors;