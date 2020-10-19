import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, removeBook }) => (
  <tr className="book-wrapper">
    <div className="book-info">
      <td className="book-category">{book.category}</td>
      <td className="book-title">{book.title}</td>
      <td className="options">
        <button type="button" className="buttons border-right">
          Comments
        </button>
        <button
          type="button"
          className="buttons border-right"
          onClick={() => removeBook(book)}
          right
        >
          Remove
        </button>
        <button type="button" className="buttons">
          Edit
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
