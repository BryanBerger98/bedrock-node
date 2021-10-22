const express = require('express');
const router = express.Router();
// const passport = require('passport');
const AuthController = new (require('./controllers'))();

router.post('/login', AuthController.loginUser);
router.post('/register', AuthController.registerUser);
router.get('/id/:userId', AuthController.getUserById);
router.get('/email/:email', AuthController.getUserByEmail);

module.exports = router;