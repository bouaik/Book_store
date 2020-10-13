import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBook } = this.props;
    createBook(this.state);
    this.setState({
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={event => this.handleChange(event, 'title')}
          />
        </label>
        <select
          id="category"
          name="category"
          value={category}
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

const mapDispatchToProps = {
  createBook,
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
export default connect(
  () => ({}),
  mapDispatchToProps,
)(BooksForm);
