import React from 'react';
import { connect } from 'react-redux';
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
                <tbody >
                    {books.map(book => <Book book={book} />)}
                </tbody>

            </table>
        </div>
    );
}

const mapStateToProps = state => ({
    books: state.books,
});

export default connect(mapStateToProps)(BooksList);
