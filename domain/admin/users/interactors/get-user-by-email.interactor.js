class GetUserByEmailInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(userId) {
        return new Promise((resolve, reject) => {
            this.usersRepository.getUserByEmail(userId).then(resolve).catch(reject);
        });
    }

}

module.exports = GetUserByEmailInteractor;