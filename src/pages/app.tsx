import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from '@reach/router';
import AppStateProvider from '../app/context/appStateProvider';

import Navigation from '../app/components/Navigation';

import HomePage from '../app/pages/home';
import Otakiri from '../app/pages/otakiri';

const App = () => (
    <AppStateProvider>
        <Navigation>
            <Router basepath="/" >
                <HomePage path="/" />
                <Otakiri path="otakiri" />
            </Router>
        </Navigation>
    </AppStateProvider>
);

export default App;