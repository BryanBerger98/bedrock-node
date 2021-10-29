const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserModel = require('../../infrastructure/models/User');
const userRepository = new (require('../../infrastructure/repositories/users.repository'))(UserModel);
const authInteractors = new (require('./interactors'))(userRepository);
const authController = new (require('./controllers'))(authInteractors);

router.put('/change-password', passport.authenticate('jwt', {session: false}), authController.changeUserPassword);
router.delete('/account', passport.authenticate('jwt', {session: false}), authController.deleteAccount);
router.put('/account', passport.authenticate('jwt', {session: false}), authController.updateAccount);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);
router.post('/register', authController.registerUser);
router.get('/current', passport.authenticate('jwt', {session: false}), authController.getCurrentUser);

module.exports = router;