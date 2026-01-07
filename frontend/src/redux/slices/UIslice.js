import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return savedTheme === "dark" ? "dark" : "light";
};

const initialState = {
  themeMode: getInitialTheme(),
  isProfileOpen: false,
  isSearchOpen: false,
  authTab: "SocialLogin",
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

    toggleSearchModal: (state) => {
      state.isSearchOpen = !state.isProfileOpen;
    },
    closeSearchModal: (state) => {
      state.isSearchOpen = false;
    },
    setAuthTab: (state, action) => {
      state.authTab = action.payload;
    },
  },
});

export const {
  toggleThemeMode,
  toggleProfileDropdown,
  closeProfileDropdown,
  toggleSearchModal,
  closeSearchModal,
  setAuthTab,
} = UIslice.actions;

export default UIslice.reducer;
