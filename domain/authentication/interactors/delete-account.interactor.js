class DeleteAccountInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(currentUser) {
        return new Promise((resolve, reject) => {
            this.usersRepository.deleteUser(currentUser._id).then(resolve).catch(reject);
        });
    }

}

module.exports = DeleteAccountInteractor;