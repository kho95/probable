/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import merge from 'lodash.merge';
import AppStateContext from './appStateContext';
import useSessionState from "../../hooks/useSessionState";
import { appState as appStateDefault } from './defaultContext'

const AppStateProvider = ({ children }) => {
  const { setSessionStorageState, getSessionStorageState } = useSessionState();

  /**
   * App state / controls
   */
  const setAppStateDetails = ({
    currentPage,
  }) => {
    updateAppStateDetails(prevState => {
      const newState = { ...prevState };

      const mergedState = merge(newState, {
        currentPage,
      });

      setSessionStorageState(mergedState);
      return mergedState;
    });
  };

  /**
   * App page update
   */
  const setAppPageDetails = (currentPage: string) => {
    updateAppStateDetails(prevState => {
      const newState = { ...prevState };

      const mergedState = merge(newState, {
        currentPage,
      });

      setSessionStorageState(mergedState);

      return mergedState;
    });
  };

  // Initialise
  const localStorageUserState = getSessionStorageState();

  const appState = merge(
    localStorageUserState || {
      currentPage: 'home',
    },
    {
      setAppPageDetails,
      setAppStateDetails,
    }
  );

  const [appStateDetails, updateAppStateDetails] = useState(appState);

  return <AppStateContext.Provider value={appStateDetails}>{children}</AppStateContext.Provider>;
};

export default AppStateProvider;
