import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../features/auth/auth-slice';
import { authApi } from '../api/auth';
import { wbApi } from '../api/wb';

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [wbApi.reducerPath]: wbApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'tokens',
  whitelist: ['auth'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authApi.middleware)
      .concat(wbApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
