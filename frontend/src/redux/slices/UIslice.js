import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  return savedTheme === "dark" ? "dark" : "light";
};

const initialState = {
  themeMode: getInitialTheme(),
  isProfileOpen: false,
  isSearchOpen: false, // ✅ added
};

const UIslice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.themeMode);
    },

    // PROFILE PANEL
    toggleProfileDropdown: (state) => {
      state.isProfileOpen = !state.isProfileOpen;
    },
    closeProfileDropdown: (state) => {
      state.isProfileOpen = false;
    },

    // SEARCH MODAL
    toggleSearchModal: (state) => {
      state.isSearchOpen = !state.isProfileOpen;
    },
    closeSearchModal: (state) => {
      state.isSearchOpen = false;
    },
  },
});

export const {
  toggleThemeMode,
  toggleProfileDropdown,
  closeProfileDropdown,
  toggleSearchModal,
  closeSearchModal,
} = UIslice.actions;

export default UIslice.reducer;
