class LoginUserController {
    constructor({loginUser}) {
        return (req, res) => {
            loginUser.execute(req.body)
            .then(response => {
                res.cookie('access_token', response.token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                  }).status(200).json(response)
            })
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = LoginUserController;