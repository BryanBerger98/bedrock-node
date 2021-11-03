class ResetPasswordWithTokenInteractor {

    constructor(usersRepository, tokensRepository) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
    }

    async execute(token, password) {
        try {
            const jwtPayload = await this.tokensRepository.checkTokenExistanceAndVerify(token);
            const user = await this.usersRepository.getUserById(jwtPayload.id);
            if (!user) throw new Error('User does not exists');
            await this.usersRepository.updateUserPassword(user, password);
            await this.tokensRepository.deleteToken(token);
            return {message: 'Password updated'};
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ResetPasswordWithTokenInteractor;