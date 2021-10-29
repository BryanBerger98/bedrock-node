class TokensRepository {

    constructor(TokenModel) {
        this.TokenModel = TokenModel;
    }

    getToken(token) {
        return new Promise((resolve, reject) => {
            this.TokenModel.findOne({token}).then(resolve).catch(reject);
        });
    }

    createToken(token) {
        return new Promise((resolve, reject) => {
            const newToken = new this.TokenModel(token);
            newToken.save().then(resolve).catch(reject);
        });
    }

    async deleteToken(token) {
        const deleteToken = await this.TokenModel.findOne({token});
        if (!deleteToken){
            const error = new Error('ValidationError');
            error.details = { message: 'Token does not exist'};
            throw error;
        }
        const deletedToken = await deleteToken.remove();
        return deletedToken;
    }

    deleteExpiredTokens() {
        return new Promise((resolve, reject) => {
            const now = new Date();
            now.setHours(now.getHours() - 2);
            this.TokenModel.deleteMany({expiration_date: {$lt: now}}).then(resolve).catch(reject);
        });
    }

}

module.exports = TokensRepository;