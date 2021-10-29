class GetAllUsersController {
    constructor({getAllUsers}) {
        return (req, res) => {
            getAllUsers.execute()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = GetAllUsersController;