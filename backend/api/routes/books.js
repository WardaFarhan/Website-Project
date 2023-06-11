const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validator');

const BookController = require('../../controllers/book.controller');
const { validateBook } = require("../models/book.model");

router.post('/add', [auth, validate(validateBook)], BookController.addBook);

module.exports = router;
