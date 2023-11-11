import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from './CommonStyle/GlobalStyles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/water-tracker-project">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);

