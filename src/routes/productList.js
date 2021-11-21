const express = require('express');
const router = express.Router();
const useCaseProducts = require('../useCase/useCaseProducts');
const validatorHanddler = require('../middleware/validator.handler');
const {createProductSchema, getProductSchema, updateProductSchema } = require('../schemas/productSchemas');

router.get('/api/products', useCaseProducts.allProducts);
router.get('/api/products/:id', useCaseProducts.one);
router.post('/api/products/add', useCaseProducts.addProducts);
router.get('/api/products/faker', useCaseProducts.faker);
router.put('/api/products/:id',useCaseProducts.update);
router.delete('/api/products/:id', useCaseProducts.delete);


module.exports =  router;


// router.get('/api/products',  validatorHanddler(getProductSchema, 'params'), useCaseProducts.allProducts);
// router.get('/api/products/:id', useCaseProducts.one);
// router.post('/api/products/add',  validatorHanddler(createProductSchema, 'params'), useCaseProducts.addProducts);
// router.get('/api/products/faker', useCaseProducts.faker);

// router.put('/api/products/:id',
// validatorHanddler(getProductSchema, 'params'),
// validatorHanddler(updateProductSchema, 'body'),
// useCaseProducts.update);
