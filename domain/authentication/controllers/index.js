const AuthInteractors = require('../interactors');
const authInteractors = new AuthInteractors();

class AuthController {

    getAllUsers = new (require('./get-all-users.controller'))(authInteractors);
    getAllUsersCount = new (require('./get-all-users-count.controller'))(authInteractors);
    getUserByEmail = new (require('./get-user-by-email.controller'))(authInteractors);
    getUserById = new (require('./get-user-by-id.controller'))(authInteractors);
    loginUser = new (require('./login-user.controller'))(authInteractors);
    logoutUser = new (require('./logout-user.controller'))(authInteractors);
    registerUser = new (require('./register-user.controller'))(authInteractors);
    updateUser = new (require('./update-user.controller'))(authInteractors);

}

module.exports = AuthController;