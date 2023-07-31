const express = require('express');
const router = express.Router();
//MVC modal-View-Controller
const userController = require('../controller/User')
router
// POST - CREATE -/users
.post('/users',userController.createUser)

// GET -READ - /users 
.get('/users',userController.getAllusers)
.get('/users/:id',userController.getUser)

//UPDATE
.put('/users/:id',userController.replaceUser)

// PATCH
.patch('/users/:id',userController.updateUser)

// DELETE
.delete('/users/:id',userController.deleteUser)

exports.router = router;