class UpdateUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(user) {
        return new Promise((resolve, reject) => {
            this.usersRepository.updateUser(user).then(resolve).catch(reject);
        });
    }

}

module.exports = UpdateUserInteractor;