class ChangeUserPasswordIneractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(currentUser, {oldPassword, newPassword}) {
        return new Promise((resolve, reject) => {
            this.usersRepository.changeUserPassword(currentUser._id, oldPassword, newPassword).then(resolve).catch(reject);
        });
    }

}

module.exports = ChangeUserPasswordIneractor;