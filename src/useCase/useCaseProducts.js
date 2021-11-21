const validatorHanddler = require('../')
const ProductService = require('../services/product.services');
const service = new ProductService ();
const { createProductSchema, uopdateProductSchema, getProductSchema} = require('../schemas/productSchemas')

ctrl = {};

ctrl.allProducts = async (req, res) => {
  const products = await service.find();
  res.status(200).json({products});
};

ctrl.addProducts = async (req, res)=> {
  const body= req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);

};

ctrl.one = async (req, res) => {
  const {id} = req.params;
  const product = await service.findOne(id);
  res.status(200).json({
    message: `ID find ${id}`
  })

};

ctrl.update = async (req, res) => {
  let {id} = req.params
  const body = req.body;
  const product = await service.update(id, body);
    res.json(product);
};


ctrl.delete = async (req, res) => {
  let {id} = req.params
  const rta = await service.delete(id);
    res.json({
      rta,
      message: "Product deleted"
    })
  };


ctrl.faker = async (req, res) => {
  const products = await service.generate();
  res.status(201).json({
  message: 'Products Created.',
  products});

};


module.exports = ctrl
