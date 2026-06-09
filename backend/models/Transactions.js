const mongoose = require('mongoose');
const Category = require('./Category');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["income", "expense"],
    },
    category: {
        type: String,
        required: true,
        default: "Uncategorized",
    },
    amount: {
        type: Number,
        required: true,
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("Transactions", TransactionSchema);