import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from '../BookShelfChanger/BookShelfChanger';
import noThumbnailImage from '../../icons/no_cover_thumb.gif'

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired
};

function BookItem(props) {
    const { book, handleUpdateShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : noThumbnailImage})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <BookShelfChanger book={book} changeShelf={handleUpdateShelf} />
                    </div>
                </div>
                <div className="book-title">{book.title ? book.title : null}</div>
                {book.authors &&
                    book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                    ))}
            </div>
        </li>
    );
}

export default BookItem;