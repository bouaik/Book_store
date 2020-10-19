import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'Fiction',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div className="filter-wrapper">
      <p className="filter-word">Filter by :</p>
      <select
        name="category"
        onChange={handleFilterChange}
        className="filter-select"
      >
        {categories.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
