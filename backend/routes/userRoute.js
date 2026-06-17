const express = require('express');
const userController = require('../controllers/userController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const userRoute = express.Router();

userRoute.post('/api/v1/users/register', userController.register);
userRoute.post('/api/v1/users/login', userController.login);
userRoute.get('/api/v1/users/profile',isAuthenticated, userController.profile);
userRoute.put('/api/v1/users/change-password', isAuthenticated, userController.changePassword);
userRoute.put('/api/v1/users/update-profile', isAuthenticated, userController.updateUserProfile);


module.exports  = userRoute;