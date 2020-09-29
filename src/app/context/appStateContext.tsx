import { createContext } from 'react';

const AppStateContext = createContext({
  /**
   * Although it is possible to remove the following I like to keep them here
   * because they help anyone importing AppStateContext to understand what properties/functions
   * this particular context has available
   */

  currentPage: 'home',
  token: '',
  userId: '',
  name: '',

  deleteUserRelatedState: () => { },
  setAppPageDetails: pageName => { },
  setAppStateDetails: (appStateDetails: {}) => { },
});

export default AppStateContext;
