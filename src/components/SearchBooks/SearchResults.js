import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../BookItem/BookItem';

SearchResults.propTypes = {

};

function SearchResults({ searchResult, changeShelf, searchError }) {
    console.log('searchResult', searchResult)
    console.log('searchResult changeShelf', changeShelf)
    // const searchedBooksResult = (searchResult?.length > 0) ? searchResult.map((searchBookItem) => {
    //     books.forEach((book) => {
    //         console.log('book result1', book)
    //     })
    // }) : [];

    return (
        <div className="search-books-results">
            {searchResult.length > 0 && (
                <div>
                    <div>
                        <h3> {searchResult.length} books found!</h3>
                    </div>
                    <ol className="books-grid">
                        {searchResult.map((book) => (
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
    );
}

export default SearchResults;