const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user.controller');

//router.post('/addUser', UserController.addUser);
router.post('/addUserBooks', UserController.addUserBooks);
router.get('/fetchUserBooks', UserController.fetchUserBooks);

module.exports = router;
