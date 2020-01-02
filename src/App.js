import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'styles/global';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <>
      <GlobalStyle />
      <Routes />
    </>
  </Provider>
);

export default App;
