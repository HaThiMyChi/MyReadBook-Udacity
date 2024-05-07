import React from 'react';
import PropTypes from 'prop-types';

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
};

function BookShelfChanger({ book, changeShelf }) {
    const handleChangeShelf = (e) => {
        const value = e.target.value;
        changeShelf(book, value);
    };

    return (
        <select
            onChange={handleChangeShelf}
            value={book.shelf ? book.shelf : "none"}
        >
            <option value="" disabled>
                Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    );
}

export default BookShelfChanger;