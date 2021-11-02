class VerifyAccountWithTokenController {
    constructor({verifyAccountWithToken}) {
        return (req, res) => {
            verifyAccountWithToken.execute(req.body.token)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error.message));
        }
    }
}

module.exports = VerifyAccountWithTokenController;