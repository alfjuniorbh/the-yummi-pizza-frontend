import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import history from './services/history';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <Notifications />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
