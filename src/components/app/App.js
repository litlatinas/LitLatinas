import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import AllPodcasts from '../allPodcasts/AllPodcasts';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

import Trial from '../allPodcasts/Podcasts';

library.add(faPlayCircle, faEnvelope, faKey);

export default function App() {
  return (
    <>
        <Header />
        <AllPodcasts />
        <Trial />
        <Footer />
    </>
  );
}



