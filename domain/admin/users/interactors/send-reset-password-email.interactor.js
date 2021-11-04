class SendResetPasswordEmailInteractor {

    constructor(usersRepository, tokensRepository, emailsService) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
        this.emailsService = emailsService;
    }

    async execute(userId) {
        try {
            const {user, token, expDate} = await this.usersRepository.generateResetPasswordTokenByUserId(userId);
            const savedToken = await this.tokensRepository.createToken({token, action: 'reset_password', expiration_date: expDate});
            const response = await this.emailsService.sendResetPasswordEmail(user, token);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = SendResetPasswordEmailInteractor;