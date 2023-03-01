import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from '../features/user/userSlice';
import newsReducer from "../features/news/newsSlice";

const userPersistConfig = {
  key: "user",
  storage,
};


const persistedUserReducer = persistReducer(userPersistConfig, userReducer);


export const store = configureStore({
  reducer: combineReducers({
    user: persistedUserReducer,
    news: newsReducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
