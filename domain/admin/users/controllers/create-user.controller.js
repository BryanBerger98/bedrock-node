class CreateUserController {
    constructor({createUser}) {
        return (req, res) => {
            createUser.execute(req.body)
            .then(response => res.status(201).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = CreateUserController;