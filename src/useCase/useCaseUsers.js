const UsersService = require('../services/users.services');
let service = new UsersService();
ctrl = {};

ctrl.allusers = async (req, res) => {
  const users = await service.find();
  res.status(200).json({users});
};

ctrl.addUsers = async (req, res) => {
  const body= req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);

};

ctrl.one = async (req, res, next) => {
  try {
    const {id} = req.params;
    const user = await service.findOne(id);
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }

};

ctrl.update = async (req, res) => {
  let {id} = req.params
  const body = req.body;
  const user = await service.update(id, body);
    res.json(user);
};


ctrl.delete = async (req, res) => {
  let {id} = req.params
  const rta = await service.delete(id);
    res.json({
      rta,
      message: "User deleted"
    })
  };



module.exports = ctrl
