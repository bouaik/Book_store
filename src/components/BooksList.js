import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

function BooksList({ books }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Book ID</td>
            <td>Title</td>
            <td>category</td>
          </tr>
        </thead>
        <tbody>
          {books.map(book => <Book book={book} key={book.id} />)}
        </tbody>

      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.isRequired,
};

export default connect(mapStateToProps)(BooksList);
