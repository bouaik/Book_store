import React from 'react';
import './App.css';
import BooksList from './components/BooksList';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
