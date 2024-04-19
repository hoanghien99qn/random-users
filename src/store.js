import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from "./features/RamdomUsers/services/usersSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})