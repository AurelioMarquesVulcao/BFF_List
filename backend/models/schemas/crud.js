const mongoose = require('mongoose');

const dataBase = new mongoose.Schema({
    // Date: Date,
    productName: String,
    sellPrice:Number,
    image: String

})

const DataProduct = mongoose.model('DataProduct', dataBase, 'dataProduct');

module.exports.DataProduct = DataProduct;