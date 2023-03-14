const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  update_date: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("book-lists", BookSchema);

module.exports = Book;
