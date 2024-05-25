import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './boardsSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
