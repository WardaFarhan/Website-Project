const { Book } = require('../api/models/book.model');

exports.addBook = async (req, res) => {
  const { title, author, publish_year} = req.body;
  const book = new Book({
    title,
    author,
    publish_year,
  });

  await book.save();
  const responseData = {
    book,
    message: 'Book saved successfully',
  };
  return res.send(responseData);
};

