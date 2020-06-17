import React from 'react';
import PropTypes from 'prop-types';

import styles from './book.css';

const  Book = ({ book }) => {
  return (
    <>
      <section className={styles.section}>
        <h2>{book.data.book_title[0].text}</h2>
        <p>{book.data.book_author[0].text}</p>
        <a href={book.data.book_link.url} target="_blank" rel="noopener noreferrer">{book.data.book_link.url}</a>
      </section>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.object
};

export default Book;
