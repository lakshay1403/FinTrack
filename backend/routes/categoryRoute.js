const express = require('express');
const categoryRoute = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const categoryController = require('../controllers/CategoryController');


//!add
categoryRoute.post('/api/v1/categories/create', isAuthenticated, categoryController.create);
//!lists
categoryRoute.get('/api/v1/categories/lists', isAuthenticated, categoryController.lists);
categoryRoute.put('/api/v1/categories/update/:id', isAuthenticated, categoryController.update);
categoryRoute.delete('/api/v1/categories/delete/:id', isAuthenticated, categoryController.delete);

module.exports = categoryRoute;