class ResetPasswordWithTokenInteractor {
    constructor({resetPasswordWithToken}) {
        return (req, res) => {
            resetPasswordWithToken.execute(req.body.token, req.body.password)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error.message));
        }
    }
}

module.exports = ResetPasswordWithTokenInteractor;