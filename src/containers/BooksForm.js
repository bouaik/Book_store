import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(e, field) {
    await this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    createBook(this.state);
    this.setState(this.baseState);
    console.log("Form Submitted");
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
      <form onSubmit={event => this.handleSubmit(event)}>
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

const mapDispatchToProps = dispatch => ({
  createBook: () => dispatch(createBook()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(BooksForm);
