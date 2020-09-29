import _ from 'lodash'

function useSessionState(): any {
  const APP_STATE_SESSION_STORAGE_KEY = 'appState';

  function setSessionStorageState(newState: {}): void {
    sessionStorage.setItem(APP_STATE_SESSION_STORAGE_KEY, JSON.stringify(newState));
  }

  function getSessionStorageState(): {} {
    let localStorageValue;
    // check this for gatsby build
    if (typeof sessionStorage !== 'undefined') {
      localStorageValue = sessionStorage.getItem(APP_STATE_SESSION_STORAGE_KEY);
    }
    return localStorageValue ? JSON.parse(localStorageValue) : null;
  }

  return { setSessionStorageState, getSessionStorageState };
}

export default useSessionState;
