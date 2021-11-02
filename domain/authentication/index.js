const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserModel = require('../../infrastructure/models/User');
const usersRepository = new (require('../../infrastructure/repositories/users.repository'))(UserModel);
const TokenModel = require('../../infrastructure/models/Token');
const tokensRepository = new (require('../../infrastructure/repositories/tokens.repository'))(TokenModel);
const emailsService = new (require('../../services/emails.service'))();
const authInteractors = new (require('./interactors'))(usersRepository, tokensRepository, emailsService);
const authController = new (require('./controllers'))(authInteractors);

router.put('/change-password', passport.authenticate('jwt', {session: false}), authController.changeUserPassword);
router.delete('/account', passport.authenticate('jwt', {session: false}), authController.deleteAccount);
router.put('/account', passport.authenticate('jwt', {session: false}), authController.updateAccount);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);
router.post('/register', authController.registerUser);
router.get('/current', passport.authenticate('jwt', {session: false}), authController.getCurrentUser);
router.post('/reset-password', authController.sendResetPasswordEmail);
router.get('/verify-account', passport.authenticate('jwt', {session: false}), authController.sendAccountVerificationEmail);

module.exports = router;