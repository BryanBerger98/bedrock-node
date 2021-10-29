class AuthController {

    constructor(authInteractors) {
        this.authInteractors = authInteractors;
        this.changeUserPassword = new (require('./change-user-password.controller'))(this.authInteractors);
        this.deleteAccount = new (require('./delete-account.controller'))(this.authInteractors);
        this.loginUser = new (require('./login-user.controller'))(this.authInteractors);
        this.logoutUser = new (require('./logout-user.controller'))(this.authInteractors);
        this.registerUser = new (require('./register-user.controller'))(this.authInteractors);
        this.getCurrentUser = new (require('./get-current-user.controller'))(this.authInteractors);
    }

}

module.exports = AuthController;