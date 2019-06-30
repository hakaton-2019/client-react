import React from 'react';

const AppContext = React.createContext();

let initialState = {
  pageTitle: '',
  introPassed: false,
  notifCount: 4,
};

let reducer = (state, action) => {

  switch (action.type) {
    case 'set-page-title':
      return { ...state, pageTitle: action.title };

    case 'reset-page-title':
      return { ...state, pageTitle: initialState.pageTitle };

    case 'intro-passed':
      return { ...state, introPassed: true };

    case 'read-notif':
      return { ...state, notifCount: 0 };

    default:
      return state;
  }
};

function AppContextProvider({children}) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };