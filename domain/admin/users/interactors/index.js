class UsersInteractors {

    constructor(usersRepository, tokensRepository, emailsService) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
        this.emailsService = emailsService;
        this.createUser = new (require('./create-user.interactor'))(this.usersRepository);
        this.deleteUser = new (require('./delete-user.interactor'))(this.usersRepository);
        this.deleteManyUsers = new (require('./delete-many-users.interactor'))(this.usersRepository);
        this.getAllUsers = new (require('./get-all-users.interactor'))(this.usersRepository);
        this.getAllUsersCount = new (require('./get-all-users-count.interactor'))(this.usersRepository);
        this.getUserByEmail = new (require('./get-user-by-email.interactor'))(this.usersRepository);
        this.getUserById = new (require('./get-user-by-id.interactor'))(this.usersRepository);
        this.sendAccountVerificationEmail = new (require('./send-account-verification-email.interactor'))(this.usersRepository, this.tokensRepository, this.emailsService);
        this.switchDisableUserState = new (require('./switch-disable-user-state.interactor'))(this.usersRepository);
        this.updateUser = new (require('./update-user.interactor'))(this.usersRepository);
    }

}

module.exports = UsersInteractors;