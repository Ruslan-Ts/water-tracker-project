import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { dataReducer } from './userData/slice';
import { modalReducer } from './modals/slice';
import { rootReducer } from './root/slice';
// import { todayReducer } from './userData/slice';

const PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'stayAuth'],
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    auth: persistReducer(PersistConfig, authReducer),
    dataUser: dataReducer,
    modals: modalReducer,
    // today: todayReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  evTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
