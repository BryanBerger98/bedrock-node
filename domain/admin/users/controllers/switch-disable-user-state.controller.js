class SwitchDisableUserState {
    constructor({switchDisableUserState}) {
        return (req, res) => {
            switchDisableUserState.execute(req.params.userId)
            .then(response => res.status(200).json(response))
            .catch(error => res.status(500).json(error));
        }
    }
}

module.exports = SwitchDisableUserState;