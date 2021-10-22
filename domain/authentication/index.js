const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = new (require('./controllers'))();

router.post('/login', AuthController.loginUser);
router.get('/logout', AuthController.logoutUser);
router.post('/register', AuthController.registerUser);
router.get('/all', passport.authenticate('jwt', {session: false}), AuthController.getAllUsers);
router.get('/all/count', passport.authenticate('jwt', {session: false}), AuthController.getAllUsersCount);
router.get('/id/:userId', passport.authenticate('jwt', {session: false}), AuthController.getUserById);
router.get('/email/:email', passport.authenticate('jwt', {session: false}), AuthController.getUserByEmail);
router.put('/update', passport.authenticate('jwt', {session: false}), AuthController.updateUser);

module.exports = router;