class LoginUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(user) {
        return new Promise((resolve, reject) => {
            this.usersRepository.loginUser(user).then(resolve).catch(reject);
        });
    }

}

module.exports = LoginUserInteractor;