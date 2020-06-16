import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Podcasts from '../Podcasts/PodcastList';
// import Podcast from '../Podcasts/Podcast';
import ResourceList from '../Resources/Resources';
import TryResources from '../Resources/tryResources';
import PodcastDetail from '../Podcasts/PodcastDetail';


export default function App() {
  return (
    <Router>
      <>
    <Header />
      <Switch>
        <Route exact path='/' component={Podcasts} />
        {/* <Route path='/team' component={Team}> */}
        {/* <Route path='/resources' component={ResourceList} /> */}
        <Route path='/resources' component={TryResources} />
        <Route path='/podcasts/:slug' component={PodcastDetail} /> 
      </Switch>
      <Footer />
      </>
    </Router>
  );
}



