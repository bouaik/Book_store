import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(e, field) {
    await this.setState({
      [field]: e.target.value,
    });
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
    const { title, category } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            title={title}
            onChange={event => this.handleChange(event, 'title')}
          />
        </label>
        <select
          id="category"
          name="category"
          category={category}
          onChange={event => this.handleChange(event, 'category')}
        >
          {categories.map(e => (
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
