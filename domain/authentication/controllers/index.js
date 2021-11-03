class AuthController {

    constructor(authInteractors) {
        this.authInteractors = authInteractors;
        this.changeUserPassword = new (require('./change-user-password.controller'))(this.authInteractors);
        this.deleteAccount = new (require('./delete-account.controller'))(this.authInteractors);
        this.loginUser = new (require('./login-user.controller'))(this.authInteractors);
        this.logoutUser = new (require('./logout-user.controller'))(this.authInteractors);
        this.registerUser = new (require('./register-user.controller'))(this.authInteractors);
        this.getCurrentUser = new (require('./get-current-user.controller'))(this.authInteractors);
        this.resetPasswordWithToken = new (require('./reset-password-with-token.controller'))(this.authInteractors);
        this.sendAccountVerificationEmail = new (require('./send-account-verification-email.controller'))(this.authInteractors);
        this.sendResetPasswordEmail = new (require('./send-reset-password-email.controller'))(this.authInteractors);
        this.updateAccount = new (require('./update-account.controller'))(this.authInteractors);
        this.verifyAccountWithToken = new (require('./verify-account-with-token.controller'))(this.authInteractors);
    }

}

module.exports = AuthController;