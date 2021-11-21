const { Boom } = require('@hapi/boom');
const faker = require('faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor () {
    this.users = [];
    this.find();
    this.findOne();
    this.create();
    this.update();
    this.delete();
  }

  async create(data) {
    const newUsers = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUsers);
    return newUsers;
  };

  async find() {
    return this.users
  };

  async findOne(id) {
    const user = this.users.find(item => item.id === id)
    if(!user){
      return boom.notFound('user not found');
    }
    return user
  };

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      return boom.conflict('Block')
    }
    const user = this.users[index];
    this.this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  };

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1){
      return boom.conflict('Block')
    }
    this.users.splice(index, 1);
    return `Item deleted ${id}`
  }

}

module.exports = UsersService
