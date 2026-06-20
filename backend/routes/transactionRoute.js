const express = require('express');
const isAuthenticated = require('../middlewares/isAuthenticated');
const TransactionController = require('../controllers/TransactionController');
const transactionRoute = express.Router();


transactionRoute.post('/api/v1/transactions/create', isAuthenticated, TransactionController.create);
transactionRoute.get('/api/v1/transactions/lists', isAuthenticated, TransactionController.getFilteredTransactions);
transactionRoute.put("/api/v1/transactions/update/:id", isAuthenticated, TransactionController.update);
transactionRoute.delete("/api/v1/transactions/delete/:id", isAuthenticated, TransactionController.delete);

module.exports = transactionRoute;