class RegisterUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(user) {
        return new Promise((resolve, reject) => {
            this.usersRepository.registerUser(user).then(resolve).catch(reject);
        });
    }

}

module.exports = RegisterUserInteractor;