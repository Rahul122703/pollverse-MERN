import { createSlice } from "@reduxjs/toolkit";

const UIInitialState = {
  themeMode: "light",
};

const UIslice = createSlice({
  name: "UI",
  UIInitialState,
  reducers: {
    toggleThemeMode: (state) => {
      if (state.themeMode == "light") {
        state.themeMode = "dark";
      } else {
        state.themeMode = "light";
      }
    },
  },
});

export const { toggleThemeMode } = UIslice.actions;

export default UIslice.reducer;
