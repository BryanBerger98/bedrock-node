const express = require('express');
const router = express.Router();
// const passport = require('passport');
const AuthController = new (require('../controllers'))();

router.post('/register', AuthController.registerUser);

module.exports = router;