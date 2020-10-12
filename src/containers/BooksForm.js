import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <form>
        <label htmlFor="title">
          Title
          <input id="title" type="text" name="title" />
        </label>
        <select id="category">
          {categories.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BooksForm;
