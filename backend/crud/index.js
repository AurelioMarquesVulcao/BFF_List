const { DataProduct } = require("../models/schemas/crud");
const { get } = require("../routes");

class CosultBasic {
  static async get(req, res) {
    let find = req.body.productName;
    let resolve;
    try {
      resolve = await DataProduct.find({ productName: find });
      res.send(resolve);
    } catch (e) {
      res.send(e);
    }
  }
  static async post(req, res) {
    let data = req.body;
    let resolve;
    try {
      resolve = await new DataProduct(data).save();
      res.send(resolve);
    } catch (e) {
      res.send(e);
    }
  }
  static async delete(req, res) {
    let data = req.body;
    let resolve;
    try {
      resolve = await DataProduct.findOneAndDelete({ _id: data._id });
      res.send(resolve);
    } catch (e) {
      res.send(e);
    }
  }
  static async put(req, res) {
    let data = req.body;
    console.log(req.body);
    let resolve;
    try {
      resolve = await DataProduct.findOneAndUpdate({ _id: data._id }, data);
      res.send(resolve);
    } catch (e) {
      res.send(e);
    }
  }
}

module.exports.CosultBasic = CosultBasic;
