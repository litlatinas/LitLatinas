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
    const books = prismicData.books;
    return books.map((book) => <Book key={book.id} book={book}/>); 
  }

  return null;
};

export default Books;
