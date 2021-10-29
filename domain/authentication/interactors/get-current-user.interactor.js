class GetCurrentUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(currentUser) {
        return new Promise((resolve, reject) => {
            this.usersRepository.getUserById(currentUser._id).then(resolve).catch(reject);
        });
    }

}

module.exports = GetCurrentUserInteractor;