class AuthInteractors {

    constructor(usersRepository, tokensRepository, emailsService) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
        this.emailsService = emailsService;
        this.changeUserPassword = new (require('./change-user-password.interactor'))(this.usersRepository);
        this.deleteAccount = new (require('./delete-account.interactor'))(this.usersRepository);
        this.loginUser = new (require('./login-user.interactor'))(this.usersRepository);
        this.registerUser = new (require('./register-user.interactor'))(this.usersRepository);
        this.getCurrentUser = new (require('./get-current-user.interactor'))(this.getCurrentUser);
        this.updateAccount = new (require('./update-account.interactor'))(this.usersRepository);
        this.sendAccountVerificationEmail = new (require('./send-account-verification-email.interactor'))(this.usersRepository, this.tokensRepository, this.emailsService);
        this.sendResetPasswordEmail = new (require('./send-reset-password-email.interactor'))(this.usersRepository, this.tokensRepository, this.emailsService);
    }

}

module.exports = AuthInteractors;