import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
    theme: themeSlice.reducer
  }
})
// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './boardsSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice'; // If you have a themeSlice

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer,
    theme: themeReducer, // If you have a themeSlice
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
