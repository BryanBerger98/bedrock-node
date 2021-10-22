class GetAllUsersCountController {
    constructor({getAllUsersCount}) {
        return (req, res) => {
            getAllUsersCount.execute()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = GetAllUsersCountController;