import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../BookItem/BookItem';

BookShelf.propTypes = {
    booksData: PropTypes.array.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
};

function BookShelf(props) {
    const { bookshelvesList, booksData, handleUpdateShelf } = props;
    return (
        <div>
            <div className="bookshelf-books" key={bookshelvesList}>
                <ol className="books-grid">
                    {booksData.map((book) => (
                        <BookItem key={book.id} book={book} handleUpdateShelf={handleUpdateShelf} />
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default BookShelf;