import React from 'react';
import { connect } from 'react-redux';

function BooksList() {
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
        <tbody />

      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
