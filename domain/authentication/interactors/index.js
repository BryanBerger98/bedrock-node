class AuthInteractors {

    constructor(usersRepository, tokensRepository, emailsService) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
        this.emailsService = emailsService;
        this.changeUserPassword = new (require('./change-user-password.interactor'))(this.usersRepository);
        this.deleteAccount = new (require('./delete-account.interactor'))(this.usersRepository);
        this.loginUser = new (require('./login-user.interactor'))(this.usersRepository);
        this.registerUser = new (require('./register-user.interactor'))(this.usersRepository);
        this.getCurrentUser = new (require('./get-current-user.interactor'))(this.usersRepository);
        this.resetPasswordWithToken = new (require('./reset-password-with-token.interactor'))(this.usersRepository, this.tokensRepository);
        this.sendAccountVerificationEmail = new (require('./send-account-verification-email.interactor'))(this.usersRepository, this.tokensRepository, this.emailsService);
        this.sendResetPasswordEmail = new (require('./send-reset-password-email.interactor'))(this.usersRepository, this.tokensRepository, this.emailsService);
        this.updateAccount = new (require('./update-account.interactor'))(this.usersRepository);
        this.verifyAccountWithToken = new (require('./verify-account-with-token.interactor'))(this.usersRepository, this.tokensRepository);
    }

}

module.exports = AuthInteractors;