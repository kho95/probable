import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from '@reach/router';
import AppStateProvider from './context/appStateProvider';

import Navigation from './components/Navigation';

import Home from './pages/home';
import Otakiri from './pages/otakiri';

import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <AppStateProvider>
      <Navigation>
        <Router>
          <Home path="/" />
          <Otakiri path="otakiri" />
        </Router>
      </Navigation>
    </AppStateProvider>
  );
};

export default App;
