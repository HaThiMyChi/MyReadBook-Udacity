import React from 'react';
import PropTypes from 'prop-types';
import ListBooks from '../components/ListBooks/ListBooks';

HomeBook.propTypes = {

};

function HomeBook() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <ListBooks />
        </div>
    );
}

export default HomeBook;