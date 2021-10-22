const UserModel = require('../models/User');
const UsersRepository = new (require('../repositories/users.repository'))(UserModel);

class AuthInteractors {

    getAllUsers = new (require('./get-all-users.interactor'))(UsersRepository);
    getAllUsersCount = new (require('./get-all-users-count.interactor'))(UsersRepository);
    getUserByEmail = new (require('./get-user-by-email.interactor'))(UsersRepository);
    getUserById = new (require('./get-user-by-id.interactor'))(UsersRepository);
    loginUser = new (require('./login-user.interactor'))(UsersRepository);
    registerUser = new (require('./register-user.interactor'))(UsersRepository);
    updateUser = new (require('./update-user.interactor'))(UsersRepository);

}

module.exports = AuthInteractors;