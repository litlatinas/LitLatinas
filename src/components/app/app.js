import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import Podcasts from '../podcasts/podcastList';
import Resources from '../resources/resources';
import PodcastDetail from '../podcasts/podcastDetail';
import Books from '../books/books';
import ResponsivePlayer from '../responsivePlayer/responsivePlayer';

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
      <ResponsivePlayer />  
      <Footer />
      </>
    </Router>
  );
}
