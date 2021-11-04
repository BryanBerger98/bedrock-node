const express = require('express');
const router = express.Router();

const UserModel = require('../../../infrastructure/models/User');
const userRepository = new (require('../../../infrastructure/repositories/users.repository'))(UserModel);
const TokenModel = require('../../../infrastructure/models/Token');
const tokensRepository = new (require('../../../infrastructure/repositories/tokens.repository'))(TokenModel);
const emailsService = new (require('../../../services/emails.service'))();
const usersInteractors = new (require('./interactors'))(userRepository, tokensRepository, emailsService);
const usersController = new (require('./controllers'))(usersInteractors);

router.delete('/id/:userId', usersController.deleteUser);
router.delete('/many', usersController.deleteManyUsers);
router.get('/all', usersController.getAllUsers);
router.get('/all/count', usersController.getAllUsersCount);
router.get('/id/:userId', usersController.getUserById);
router.get('/email/:email', usersController.getUserByEmail);
router.get('/disable-state/:userId', usersController.switchDisableUserState);
router.post('/create', usersController.createUser);
router.put('/update', usersController.updateUser);
router.get('/verify-account/:userId', usersController.sendAccountVerificationEmail);

module.exports = router;