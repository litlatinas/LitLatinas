import React, { useState, useEffect } from 'react';

import { prismicGetter } from '../../services/prismicApi';
import Book from './book';

const Books = () => {
  const [prismicData, setPrismicData] = useState(null);

  useEffect(() => {
    const fetchPrismicData = async() => {
      try {
        // TODO to add loading state with spinner
        const books = await prismicGetter('book');
        if(books) {
          setPrismicData({ books: books.results });
        }
      } catch(e) {
        console.error('e: ', e);
      }
    };
    fetchPrismicData();
  }, []);

  if(prismicData) {
    const prismicBooks = prismicData.books;
    const books = prismicBooks.map((book, i) => <li key={i}><Book key={book.id} book={book}/></li>);
    return (
      <section id="books">
        <ul>
          {books}
        </ul>
      </section>
    );
  }

  return null;
};

export default Books;
