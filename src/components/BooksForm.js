import React from 'react';
/* eslint-disable jsx-a11y/label-has-associated-control */
const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title" />
      <select id="category">
        {categories.map(e => <option key={e} value={e}>{e}</option>)}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
