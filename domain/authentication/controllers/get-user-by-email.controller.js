class GetUserByEmailController {
    constructor({getUserByEmail}) {
        return (req, res) => {
            getUserByEmail.execute(req.params.email)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = GetUserByEmailController;