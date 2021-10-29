class DeleteManyUsersInteractor {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(userIds) {
        return new Promise((resolve, reject) => {
            userIds = userIds.split(',');
            this.usersRepository.deleteManyUsers(userIds).then(resolve).catch(reject);
        });
    }

}

module.exports = DeleteManyUsersInteractor;