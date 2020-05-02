import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'yummi',
      storage,
      whitelist: ['cart', 'login'],
    },
    reducers,
  );

  return persistedReducer;
};
