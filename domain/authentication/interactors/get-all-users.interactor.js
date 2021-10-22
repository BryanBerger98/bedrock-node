class GetAllUsersInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute() {
        return new Promise((resolve, reject) => {
            this.usersRepository.getAllUsers().then(resolve).catch(reject);
        });
    }

}

module.exports = GetAllUsersInteractor;