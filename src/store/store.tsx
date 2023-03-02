import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { newsReducer } from './slices/newsSlice';
import { userReducer } from './slices/userSlice';

const rootReducer = combineReducers({ news: newsReducer, user: userReducer })

export const store = configureStore({
  reducer: rootReducer,
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;