class SendResetPasswordEmailController {
    constructor({sendResetPasswordEmail}) {
        return (req, res) => {
            sendResetPasswordEmail.execute(req.body.email)
            .then(response => res.status(201).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = SendResetPasswordEmailController;