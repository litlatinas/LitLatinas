import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import Podcast from '../Podcasts/Podcast';
import Podcasts from '../Podcasts/PodcastList';

library.add(faPlayCircle, faEnvelope, faKey);

export default function App() {
  return (
    <Router>
      <>
    <Header />
      <Switch>
        <Route exact path='/' component={Podcasts} />
        {/* <Route path='/team' component={Team}>
        <Route path='/resources' component={Resources} /> */}
        <Route path='/podcasts/:slug' component={Podcast} /> 
      </Switch>
      <Footer />
      </>
    </Router>
  );
}
