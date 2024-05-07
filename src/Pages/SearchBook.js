import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { search, update } from '../services/BooksAPI';
import BookItem from '../components/BookItem/BookItem';


function SearchBook(props) {
    const location = useLocation()
    const [searchedBook, setSearchedBook] = useState([]);
    const [books, setBooks] = useState([]);
    const [searchError, setSearchError] = useState(false);

    const handleResetSearch = () => {
        setSearchedBook([])
    };

    useEffect(() => {
        setBooks(location.state);
    }, [location.state]);

    const searching = (event) => {
        const searchInput = event.target.value;

        if (searchInput) {
            search(searchInput).then((resultBooks) => {
                if (!resultBooks || resultBooks.hasOwnProperty("error")) {
                    setSearchedBook([]);
                    setSearchError(true);
                } else {
                    setSearchedBook(resultBooks);
                    setSearchError(false);
                    syncBookShelf(books, resultBooks);
                }
            });
        } else {
            setSearchedBook([]);
        }
    };

    const syncBookShelf = (books, searchedBook) => {
        if (books && searchedBook) {
            books.forEach(book => {
                searchedBook.forEach(searchResultBook => {
                    if (book.id === searchResultBook.id) {
                        searchResultBook.shelf = book.shelf
                    }
                })
            });

            setSearchedBook(searchedBook);
        }
    };

    const changeShelf = (book, shelf) => {
        update(book, shelf).then((result) => {
            book.shelf = shelf;
            var updatedBooks = books.filter(
                (resultBook) => resultBook.id !== book.id
            );
            updatedBooks.push(book);
            setBooks(updatedBooks);
        });
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/">
                    <button className="close-search" onClick={handleResetSearch}>
                        Close
                    </button>
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        onChange={searching}
                        placeholder="Search by title or author"
                    />
                </div>
            </div>
            <div className="search-books-results">
                {searchedBook.length > 0 && (
                    <div>
                        <div>
                            <h3> {searchedBook.length} books found!</h3>
                        </div>
                        <ol className="books-grid">
                            {searchedBook.map((book) => (
                                <BookItem key={book.id} book={book} handleUpdateShelf={changeShelf} />
                            ))}
                        </ol>
                    </div>
                )}
                {searchError && (
                    <div>
                        <h3>No book found. Please try again !</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBook;