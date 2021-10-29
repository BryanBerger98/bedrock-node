class SwitchDisableUserState {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    execute(userId) {
        return new Promise((resolve, reject) => {
            this.usersRepository.switchDisableUserState(userId).then(resolve).catch(reject);
        });
    }

}

module.exports = SwitchDisableUserState;