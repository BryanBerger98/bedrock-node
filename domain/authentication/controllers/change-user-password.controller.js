class ChangeUserPassword {
    constructor({changeUserPassword}) {
        return (req, res) => {
            changeUserPassword.execute(req.user, req.body)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error.message));
        }
    }
}

module.exports = ChangeUserPassword;