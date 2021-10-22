class GetUserByIdInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(userId) {
        return new Promise((resolve, reject) => {
            this.usersRepository.getUserById(userId).then(resolve).catch(reject);
        });
    }

}

module.exports = GetUserByIdInteractor;