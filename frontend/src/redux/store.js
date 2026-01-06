import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/UIslice";
import authReducer from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    UI: uiReducer,
    auth: authReducer,
  },
});
