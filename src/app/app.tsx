import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from '@reach/router';
import AppStateProvider from './context/appStateProvider';

import Navigation from './components/Navigation';

import Home from './pages/home';
import Otakiri from './pages/otakiri';

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
