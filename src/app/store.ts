import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from '../features/user/userSlice';
import newsReducer from "../features/news/newsSlice";
// It is a  persist configuration for user reducer
const userPersistConfig = {
  key: "user",
  storage,
};

// then we create persist reducer with userPersistConfig and userReducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// that way of configuration allows us save state in localStorage only in userReducer
export const store = configureStore({
  reducer: combineReducers({
    user: persistedUserReducer,
    news: newsReducer,
  }),
  // here we have middleware because we dont want to have an error with serialization in redux-persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// This persistor will be passed in Index.tsx if we want to have working redux-persist
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
