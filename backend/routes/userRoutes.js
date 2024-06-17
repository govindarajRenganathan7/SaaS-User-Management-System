const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/controller')

const Router = express.Router();



Router.route("/").get(getUsers).post(createUser);

Router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = Router