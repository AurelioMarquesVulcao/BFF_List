const mongoose = require("mongoose");

const dataBase = new mongoose.Schema({
  creatDate: Date,
  productName: String,
  sellPrice: Number,
  shopSellPrice: [{ shopName: String, shopId: String, sellPrice: Number }],
  image: String,
});

const DataProduct = mongoose.model("DataProduct", dataBase, "dataProduct");

module.exports.DataProduct = DataProduct;

const dataMarketplace = new mongoose.Schema({
  creatDate: Date,
  marketplaceName: String,
  image: String,
});

const DataMarketplace = mongoose.model("DataMarketplace", dataMarketplace, "DataMarketplace");

module.exports.DataMarketplace = DataMarketplace;

const shoppingList = new mongoose.Schema({
  Date: Date,
  shopName: String,
  productName: String,
  sellPrice: Number,
  image: String,
});

const ShoppingList = mongoose.model("ShoppingList", shoppingList, "shoppingList");

module.exports.DataProduct = ShoppingList;
