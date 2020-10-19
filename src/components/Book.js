import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, removeBook }) => (
  <tr className="book-wrapper">
    <div className="book-info">
      <td>{book.category}</td>
      <td>{book.title}</td>
      <td>
        <button type="button" onClick={() => removeBook(book)}>
          Remove Book
        </button>
      </td>
    </div>
    <div className="book-progress">75%</div>
    <div className="book-update">update Progress</div>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
