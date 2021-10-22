const AuthInteractors = require('../interactors');
const authInteractors = new AuthInteractors();

class AuthController {

    getUserByEmail = new (require('./get-user-by-email.controller'))(authInteractors);
    getUserById = new (require('./get-user-by-id.controller'))(authInteractors);
    loginUser = new (require('./login-user.controller'))(authInteractors);
    registerUser = new (require('./register-user.controller'))(authInteractors);

}

module.exports = AuthController;