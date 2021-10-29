class DeleteAccountController {
    constructor({deleteAccount}) {
        return (req, res) => {
            deleteAccount.execute(req.user)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = DeleteAccountController;