import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Podcast from '../Podcasts/Podcast';
import Podcasts from '../Podcasts/PodcastList';


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



