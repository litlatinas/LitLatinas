import React from 'react';

//TODO npm uninstall BrowersRouter 

import Header from '../header/header';
import Footer from '../footer/footer';
import Podcasts from '../podcasts/podcastList';
import Resources from '../resources/resources';
import Books from '../books/books';
import Team from '../team/team';

export default function App() {
  return (
    <>
      <Header />
      <Podcasts />
      <Team />
      <Resources />
      <Books />
      <Footer />
    </>
  );
}
