const UserModel = require('../models/User');
const UsersRepository = new (require('../repositories/users.repository'))(UserModel);

class AuthInteractors {

    getUserByEmail = new (require('./get-user-by-email.interactor'))(UsersRepository);
    getUserById = new (require('./get-user-by-id.interactor'))(UsersRepository);
    loginUser = new (require('./login-user.interactor'))(UsersRepository);
    registerUser = new (require('./register-user.interactor'))(UsersRepository);

}

module.exports = AuthInteractors;