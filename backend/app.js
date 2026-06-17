require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./middlewares/errorhandler');
const categoryRoute = require('./routes/categoryRoute');
const transactionRoute = require('./routes/transactionRoute');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DataBase connected successfully");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(1);
    }
};

connectDB();

//!Middlewares
app.use(express.json());  //pass incoming json data
//!Routes
app.use('/', userRoute);
app.use('/', categoryRoute);
app.use('/',transactionRoute);
//Error
app.use(errorHandler);
const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});