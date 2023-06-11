const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Joi = require('joi');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  publish_year: {
    type: String,
    minlength: 3,
    maxlength: 512,
    required: true,
  },
  author: {
    type: String,
    minlength: 3,
    maxlength: 64,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

function validateBook(reqBook) {
  const schema = {
    title: Joi.string().min(3).max(50).required(),
    publish_year: Joi.string().min(3).max(512).required(),
    author: Joi.string().min(3).max(64).required(),
  };
  return Joi.validate(reqBook, schema);
}

module.exports = {
  Book,
  validateBook,
};


 