class VerifyAccountWithTokenInteractor {

    constructor(usersRepository, tokensRepository) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
    }

    async execute(token) {
        try {
            const jwtPayload = await this.tokensRepository.checkTokenExistanceAndVerify(token);
            const user = await this.usersRepository.getUserById(jwtPayload.id);
            if (!user) throw new Error('User does not exists');
            if (user.email_verified) throw new Error('Account already verified');
            await this.usersRepository.updateUser({_id: jwtPayload.id, email_verified: true});
            await this.tokensRepository.deleteToken(token);
            return {message: 'Account verified'};
        } catch (error) {
            throw error;
        }
    }

}

module.exports = VerifyAccountWithTokenInteractor;