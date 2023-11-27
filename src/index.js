import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from './CommonStyle/GlobalStyles.jsx';
import Loader from 'components/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);

