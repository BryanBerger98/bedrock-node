class DeleteUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(userId) {
        return new Promise((resolve, reject) => {
            this.usersRepository.deleteUser(userId).then(resolve).catch(reject);
        });
    }

}

module.exports = DeleteUserInteractor;