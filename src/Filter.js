// Filter.js
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={(e) => setFilter({ ...filter, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filter.rating}
        onChange={(e) => setFilter({ ...filter, rating: e.target.value })}
      />
    </div>
  );
};

export default Filter;
