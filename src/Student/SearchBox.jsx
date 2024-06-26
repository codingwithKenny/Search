import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onInput={searchChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default SearchBox;
