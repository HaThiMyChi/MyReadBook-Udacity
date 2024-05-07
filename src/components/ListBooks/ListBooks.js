import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAll, update } from '../../services/BooksAPI';
import BookShelf from '../BookShelf/BookShelf';
import AddBook from '../AddBok/AddBook';
import { Link } from 'react-router-dom'
ListBooks.propTypes = {

};

function ListBooks(props) {
    const [booksList, setBooksList] = useState([]);

    const bookshelves = [
        { key: 'currentlyReading', name: 'Currently Reading' },
        { key: 'wantToRead', name: 'Want to Read' },
        { key: 'read', name: 'Have Read' },
    ];

    const getAllBooksData = async () => {
        const books = await getAll();

        setBooksList(books);
    };

    const handleUpdate = async (book, newShelf) => {
        await update(book, newShelf);
        const books = await getAll();
        if (newShelf !== "none") {
            setBooksList(books);
        } else {
            setBooksList(prevBooks => prevBooks.filter(b => b.id !== book.id))
        }
    }

    useEffect(() => {
        getAllBooksData().then();
    }, []);

    return (
        <div className="list-books-content">
            {booksList.length > 0 && (
                <div>
                    {bookshelves.map((shelf, index) => {
                        const booksData = booksList.filter(
                            (book) => book.shelf === shelf.key
                        );

                        return (
                            <div className="bookshelf" key={index}>
                                <h2 className="bookshelf-title">{shelf.name}</h2>
                                <BookShelf
                                    key={index}
                                    bookshelvesList={bookshelves}
                                    booksData={booksData}
                                    handleUpdateShelf={handleUpdate}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            <div className="open-search">
                <Link to="/search" state={booksList}>Add a book</Link>
            </div>
        </div>

    );
}

export default ListBooks;