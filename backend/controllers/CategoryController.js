const Category = require("../models/Category");
const asyncHandler = require('express-async-handler');

const categoryController = {
    //!add
    create: asyncHandler(async(req,res) =>{
        const { name, type } = req.body;
        if(!name || !type){
            throw new Error("Name and type are required for creating a category");
        }
        const normalizedName = name.toLowerCase();
        const validTypes = ['income','expense'];
        if(!validTypes.includes(type.toLowerCase())){
            throw new Error('Invalid category type' + ' ' + type);
        }
        const categoryExists = await Category.findOne({name: normalizedName, user: req.user});
        if(categoryExists){
            throw new Error(`Category ${categoryExists.name} already exists in the database`);
        }
        const category = await Category.create({
            name: normalizedName, user: req.user,
            type,
        });
        res.status(201).json(category);
    }),
    //!lists
    lists: asyncHandler(async(req,res) => {
        const category = await Category.find({user: req.user});
        res.status(200).json(category);
    }),
    //!update
    update: asyncHandler(async(req,res) => {

    }),
    //!delete
    delete: asyncHandler(async(req,res) => {

    })
};

module.exports = categoryController;