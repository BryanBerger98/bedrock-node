class SendAccountVerificationEmailInteractor {

    constructor(usersRepository, tokensRepository, emailsService) {
        this.usersRepository = usersRepository;
        this.tokensRepository = tokensRepository;
        this.emailsService = emailsService;
    }

    async execute(userId) {
        try {
            const {user, token, expDate} = await this.usersRepository.generateValidationAccountToken(userId);
            const savedToken = await this.tokensRepository.createToken({token, action: 'account_verification', expiration_date: expDate});
            const response = await this.emailsService.sendAccountVerificationEmail(user, token);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = SendAccountVerificationEmailInteractor;