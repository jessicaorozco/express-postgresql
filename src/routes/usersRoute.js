const express = require('express');
const router = express.Router();
const useCaseUsers = require('../useCase/useCaseUsers');


router.get('/api/users', useCaseUsers.allusers);
router.post('/api/users/', useCaseUsers.addUsers);
router.get('/api/users/:id', useCaseUsers.one);
router.patch('/api/users/:id', useCaseUsers.update);
router.delete('/api/users/:id', useCaseUsers.delete)


module.exports =  router;
