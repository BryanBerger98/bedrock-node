class GetAllUsersCountInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute() {
        return new Promise((resolve, reject) => {
            this.usersRepository.getAllUsersCount().then(resolve).catch(reject);
        });
    }

}

module.exports = GetAllUsersCountInteractor;