import React from 'react';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = () => (
  <div>
    <p>Filter:</p>
    <select>
      {categories.map(e => (
        <option key={e}>{e}</option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
