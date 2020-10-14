import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({ books, removeBook }) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div>
      <CategoryFilter />
      <table>
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Title</td>
            <td>category</td>
            <td>Delete Action</td>
          </tr>
        </thead>
        <tbody>
          {books.map(book => <Book book={book} removeBook={handleRemoveBook} key={book.id} />)}
        </tbody>

      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = {
  removeBook,
};
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
