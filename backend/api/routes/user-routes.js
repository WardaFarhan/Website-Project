const router = require('express').Router();
const {
  createUser,
  saveBook,
  deleteBook,
} = require('./auth');

// import middleware
const { authMiddleware } = require('../middleware/requireLogin');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/saved').post(createUser).put(authMiddleware, saveBook);

router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
