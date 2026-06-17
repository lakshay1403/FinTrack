const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const TransactionController = require('../controllers/TransactionController');
const transactionRoute = express.Router();


transactionRoute.post('/api/v1/transactions/create', isAuthenticated, TransactionController.create);
transactionRoute.get('/api/v1/transactions/lists', isAuthenticated, TransactionController.lists);

module.exports = transactionRoute;