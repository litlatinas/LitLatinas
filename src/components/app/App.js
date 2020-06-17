import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../Footer/Footer';
import Podcasts from '../Podcasts/PodcastList';
import Resources from '../resources/resources';
import Books from '../books/books'
import PodcastDetail from '../Podcasts/PodcastDetail';


export default function App() {
  return (
    <Router>
      <>
    <Header />
      <Switch>
        <Route exact path='/' component={Podcasts} />
        <Route path='/resources' component={Resources} />
        <Route path='/library' component={Books} />
        <Route path='/podcasts/:slug' component={PodcastDetail} /> 
      </Switch>
      <Footer />
      </>
    </Router>
  );
}



