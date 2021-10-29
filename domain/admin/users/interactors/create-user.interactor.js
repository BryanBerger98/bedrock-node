class CreateUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(user) {
        return new Promise((resolve, reject) => {
            this.usersRepository.createUser(user).then(resolve).catch(reject);
        });
    }

}

module.exports = CreateUserInteractor;