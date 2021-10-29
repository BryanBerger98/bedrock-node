class UpdateUserInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(currentUser, {photo_url, username, phone_number}) {
        return new Promise((resolve, reject) => {
            this.usersRepository.updateUser({_id: currentUser._id, photo_url, username, phone_number}).then(resolve).catch(reject);
        });
    }

}

module.exports = UpdateUserInteractor;