import React from 'react';
import '../index.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
