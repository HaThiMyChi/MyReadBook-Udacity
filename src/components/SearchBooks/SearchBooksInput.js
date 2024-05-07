import React from 'react';
import PropTypes from 'prop-types';

SearchBooksInput.propTypes = {

};

function SearchBooksInput({ onSearch }) {

  const handleSearchQuery = (event) => {
    const searchInput = event.target.value;

    if (searchInput) {
      console.log('searchInput', searchInput)
      onSearch(searchInput);
    }
  };

  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={handleSearchQuery}
        autoFocus
      />
    </div>
  );
}

export default SearchBooksInput;