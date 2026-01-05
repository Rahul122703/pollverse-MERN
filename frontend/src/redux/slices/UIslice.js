import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return savedTheme === "dark" ? "dark" : "light";
};

const initialState = {
  themeMode: getInitialTheme(),
  isProfileOpen: false,
};

const UIslice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.themeMode);
    },
    toggleProfileDropdown: (state) => {
      state.isProfileOpen = !state.isProfileOpen;
    },
    closeProfileDropdown: (state) => {
      state.isProfileOpen = false;
    },
  },
});

export const {
  toggleThemeMode,
  toggleProfileDropdown,
  closeProfileDropdown,
} = UIslice.actions;

export default UIslice.reducer;
