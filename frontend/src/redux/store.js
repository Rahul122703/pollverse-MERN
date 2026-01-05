import { configureStore } from "@reduxjs/toolkit";
import UIslice from "./slices/UIslice";

export const store = configureStore({
  reducer: {
    UI: UIslice,
  },
});
