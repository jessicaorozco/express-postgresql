const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor () {
    this.products = [];
    this.generate();
    this.find();
    this.findOne();
    this.create();
    this.update();
    this.delete();
  }

  async generate() {
    const limit =  100;
    for(let i =0; i<limit; i++){
      this.products.push({
        id: faker.datatype.uuid(),
        title : faker.commerce.productName(),
        category : faker.commerce.department(),
        price : parseInt(faker.commerce.price(),10),
        imagePath: faker.image.imageUrl(),
        isBlock : faker.datatype.boolean()
      })
    }
  };

  async create(data) {
    const newProducts = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProducts);
    return newProducts;
  };

  async find() {
    return this.products
  };

  async findOne(id) {
    const product = this.products.find(item => item.id === id)
    if(!product){
      return 'products not found'
    }
    if(product.isBlock){
      return'products is block'
    }
      return this.product
  };

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      return 'Product No Found';
    }
    const product = this.products[index];
    this.this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  };

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    this.products.splice(index, 1);
    return `Item deleted ${id}`
  }

}

module.exports = ProductService
