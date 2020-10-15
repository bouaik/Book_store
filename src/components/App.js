import React from 'react';
import '../index.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bookstore CMS</h1>
        <p>BOOKS</p>
        <p>CATEGORIES</p>
      </header>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
