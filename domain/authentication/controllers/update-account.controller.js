class UpdateAccountController {
    constructor({updateAccount}) {
        return (req, res) => {
            updateAccount.execute(req.user, req.body)
            .then(response => res.status(201).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = UpdateAccountController;