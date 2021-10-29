class UsersRepository {

    constructor(UserModel) {
        this.UserModel = UserModel;
    }

    getAllUsers() {
        return new Promise((resolve, reject) => {
            this.UserModel.find({}, {password: 0}).then(resolve).catch(reject);
        });
    }

    getAllUsersCount() {
        return new Promise((resolve, reject) => {
            this.UserModel.find().count().then(resolve).catch(reject);
        });
    }

    getUserById(userId) {
        return new Promise((resolve, reject) => {
            this.UserModel.findById(userId, {password: 0}).then(resolve).catch(reject);
        });
    }

    getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            this.UserModel.findOne({email}, {password: 0}).then(resolve).catch(reject);
        });
    }

    getManyUsersById(userIds) {
        const filter = userIds && userIds.length > 0 ? {_id: {$in: userIds}} : {};
        return new Promise((resolve, reject) => {
            this.UserModel.find(filter, {password: 0}).then(resolve).catch(reject);
        });
    }

    async createUser(user) {
        user = new this.UserModel(user);
        await this._checkExistance(user, false);
        const hashedPassword = await this._hashPassword(user.password);
        user.password = hashedPassword;
        const newUser = await user.save();
        return newUser;
    }

    async loginUser(user) {
        const userFound = await this.UserModel.findOne({email: user.email});
        if (!userFound){
            const error = new Error('User does not exist');
            throw error;
        }
        await this._comparePassword(user.password, userFound.password);
        const token = await this._createToken(userFound);
        return {token, user: userFound};
    }

    deleteUser(userId) {
        return new Promise((resolve, reject) => {
            this.UserModel.findOneAndDelete({_id: userId})
            .then((deletedUser) => {
                deletedUser = deletedUser.toObject();
                delete deletedUser.password;
                resolve(deletedUser);
            }).catch(reject);
        });
    }

    deleteManyUsers(userIds) {
        return new Promise((resolve, reject) => {
            this.UserModel.deleteMany({_id: {$in: userIds}}).then(resolve).catch(reject);
        });
    }

    updateUser(user) {
        return new Promise((resolve, reject) => {
            if (user.password) delete user.password;
            this.UserModel.findOneAndUpdate({ _id: user._id }, { $set: {...user} }, {new: true})
            .then((updatedUser) => {
                updatedUser = updatedUser.toObject();
                delete updatedUser.password;
                resolve(updatedUser);
            }).catch(reject);
        });
    }

    updateUserByEmail(user) {
        return new Promise((resolve, reject) => {
            const userToUpdate = {...user};
            if (userToUpdate.password) delete userToUpdate.password;
            this.UserModel.findOneAndUpdate({ email: user.email }, { $set: userToUpdate }, {new: true})
            .then((updatedUser) => {
                updatedUser = updatedUser.toObject();
                delete updatedUser.password;
                resolve(updatedUser);
            }).catch(reject);
        });
    }

    async switchDisableUserState(userId) {
        const user = await this.UserModel.findById(userId);
        if (!user){
            const error = new Error('User does not exist');
            throw error;
        }
        user.disabled = !user.disabled;
        const updatedUser = await this.UserModel.findOneAndUpdate({ _id: user._id }, { $set: user }, {new: true});
        return updatedUser;
    }

    async changeUserPassword(userId, oldPassword, newPassword) {
        try {
            const user = await this.UserModel.findById(userId);
            await this._comparePassword(oldPassword, user.password);
            user.password = await this._hashPassword(newPassword);
            return await this.UserModel.updateOne({ _id: user._id }, { $set: user });
        } catch (error) {
            throw error;
        }
    }

    generateResetPasswordToken(email) {
        return new Promise((resolve, reject) => {
            this.UserModel.findOne({email}, {password: 0})
            .then(async (user) => {
                if (!user) {
                    const error = new Error('User does not exist');
                    return reject(error);
                }
                const token = await this._createToken(user,  Math.floor(Date.now() / 1000) + (60 * 60 * 2), true, false);
                resolve({user, token});
            }).catch(reject);
        });
    }

    generateValidationAccountToken(id) {
        return new Promise((resolve, reject) => {
            this.UserModel.findOne({_id: id}, {password: 0})
            .then(async (user) => {
                if (!user) {
                    const error = new Error('User does not exist');
                    return reject(error); 
                }
                const token = await this._createToken(user,  Math.floor(Date.now() / 1000) + (60 * 60 * 24), false, true);
                resolve({user, token});
            }).catch(reject);
        });
    }

    async updatePasswordFromToken(userId, password) {
        const user = await this.UserModel.findById(userId);
        if (!user){
            const error = new Error('User does not exist');
            throw error;
        }
        user.password = await this._hashPassword(password);
        const updatedUser = await this.UserModel.updateOne({ _id: user._id }, { $set: user });
        return updatedUser;
    }

    async _checkExistance(user, expectedValue){
        const userExists = await this.UserModel.exists(user);
        if (userExists && !expectedValue) {
            const error = new Error('User already exists');
            throw error;
        } else if (userExists && expectedValue) {
            const error = new Error('User does not exist');
            throw error;
        }
        return;
    }

    async _hashPassword(password) {
        if (!password) {
            const error = new Error('Password is missing');
            throw error;
        }
        const hashedPassword = await this.UserModel.hashPassword(password);
        return hashedPassword;
    }

    async _comparePassword(candidatepassword, password) {
        const passwordMatch = await this.UserModel.comparePassword(candidatepassword, password);
        if (!passwordMatch) {
            const error = new Error('Wrong password');
            throw error;
        }
        return;
    }

    async _createToken(user, expirationDate, resetPasswordToken) {
        return await this.UserModel.createToken(user, expirationDate, resetPasswordToken);
    }

    _generatePassword() {
        return this.UserModel.generatePassword();
    }

}

module.exports = UsersRepository;