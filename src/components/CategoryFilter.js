import React from "react";

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = [
    "All",
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ];

  return (
    <div>
      <p>Filter:</p>
      <select name="category" onChange={handleFilterChange}>
        {categories.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
