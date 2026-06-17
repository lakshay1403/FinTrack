const asyncHandler = require('express-async-handler');
const Transaction = require('../models/Transactions');

const TransactionController = {
    create: asyncHandler(async (req,res) => {
        const {type, category, amount, date, description } = req.body;
        if(!amount || !type || !date){
            throw new Error("Type, amount and date are required");
        }
        //!Create
        const transaction = await Transaction.create({
            user: req.user,
            type,
            category,
            amount,
            description,
        });
        res.status(201).json(transaction);
    }),
    getFilteredTransactions: asyncHandler(async (req,res) => {
        const {startDate, endDate, type, category } = req.query;
       let filters = {user: req.user, date: startDate,};
       if(startDate){
        filters.date = {...filters.date, $gte: new Date(startDate)};
       }
       if(endDate){
        filters.date = {...filters.date, $lte: new Date(endDate)};
       }
       if(type){
        filters.type = type;
       }
       if(category){
        if(category === 'All'){
            
        }else if(category === 'Uncategorized'){
            filters.category = 'Uncategorized'
        }else{
            filters.category = category;
        }
       }
       const transactions = await Transaction.find(filters).sort({date: -1});
       res.json(transactions);
    }),
};

module.exports = TransactionController;