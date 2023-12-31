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

import { rootReducer } from './root/slice';

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
