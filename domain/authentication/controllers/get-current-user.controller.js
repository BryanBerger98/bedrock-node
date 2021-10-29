class GetCurrentUserController {
    constructor({getCurrentUser}) {
        return (req, res) => {
            getCurrentUser.execute(req.user._id)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = GetCurrentUserController;