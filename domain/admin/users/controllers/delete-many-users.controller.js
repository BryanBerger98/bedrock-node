class DeleteManyUsersController {
    constructor({deleteManyUsers}) {
        return (req, res) => {
            deleteManyUsers.execute(req.query.userIds)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = DeleteManyUsersController;