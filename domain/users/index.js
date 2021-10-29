const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserModel = require('../../infrastructure/models/User');
const userRepository = new (require('../../infrastructure/repositories/users.repository'))(UserModel);
const usersInteractors = new (require('./interactors'))(userRepository);
const usersController = new (require('./controllers'))(usersInteractors);

router.put('/update', passport.authenticate('jwt', {session: false}), usersController.updateUser);

module.exports = router;