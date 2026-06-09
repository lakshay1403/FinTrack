const express = require('express');
const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/api/v1/users/register', userController.register);
userRoute.post('/api/v1/users/login', userController.login);


module.exports  = userRoute;