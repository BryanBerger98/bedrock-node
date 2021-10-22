class LogoutUserController {
    constructor() {
        return (req, res) => {
            res.clearCookie('access_token').status(200).json({ message: 'Successfully logged out' });
        }
    }
}

module.exports = LogoutUserController;