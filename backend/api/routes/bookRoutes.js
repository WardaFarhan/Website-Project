const { Book, validateBook } = require("../models/book.model");

exports.addUserBooks = async (req, res) => {
    try {
      const { userId, books } = req.body;
  
      books.forEach((book) => {
        const { error } = validateBook(book);
        if (error) return res.status(400).send(error.details[0].message);
      });
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send({ Error: 'User not found' });
      }
  
      // save data books and update user books
      const dbBookIds = [];
      for (const book of books) {
        const { title, author, publish_year } = book;
        const dbBook = new Book({
          title,
          author,
          publish_year,
        });
  
        const dbSavedBook = await dbBook.save();
        if (dbSavedBook) {
          dbBookIds.push(dbSavedBook._id);
        }
      }
      if (!user.books) user.books = [];
      user.books.push(...dbBookIds);
      await user.save();
  
      return res.send({ message: 'User books saved successfully' });
    } catch (err) {
      return res.status(500).send(err);
    }
  };
  
  exports.fetchUserBooks = async (req, res) => {
    try {
      const { userId } = req.query;
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send({ Error: 'User not found' });
      }
  
      const bookIds = user.books;
      const books = await Book.find({
        _id: { $in: bookIds.map((id) => id) },
      });
  
      return res.send({ books, message: 'User books saved successfully' });
    } catch (err) {
      return res.status(500).send(err);
    }
  };