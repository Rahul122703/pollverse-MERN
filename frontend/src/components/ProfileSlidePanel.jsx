import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode, closeProfileDropdown } from "../redux/slices/UIslice";

import { FiUser, FiEye, FiMoon, FiSun, FiLogOut, FiX } from "react-icons/fi";

const ProfileSlidePanel = () => {
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state) => state.UI);

  return (
    <div
      className="
      fixed top-0 right-0 h-full w-72
      bg-white/90 dark:bg-gray-900/90
      backdrop-blur-xl
      border-l dark:border-gray-800
      dark:text-white
      shadow-xl
      animate-slideIn
      z-50 *
      rounded-l-2xl
    "
    >
      <div className="p-4 flex justify-between items-center">
        <span className="font-medium">Profile</span>
        <button onClick={() => dispatch(closeProfileDropdown())}>
          <FiX />
        </button>
      </div>

      <div className="px-4 space-y-2 text-sm">
        <Item icon={<FiUser />} text="View Profile" />
        <Item icon={<FiEye />} text="Go Incognito" />

        <button
          onClick={() => dispatch(toggleThemeMode())}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg
                     hover:bg-black/5 dark:hover:bg-white/10"
        >
          {themeMode === "dark" ? <FiSun /> : <FiMoon />}
          Toggle Theme
        </button>

        <Item icon={<FiLogOut />} text="Logout" danger />
      </div>
    </div>
  );
};

export default ProfileSlidePanel;

const Item = ({ icon, text, danger }) => (
  <div
    className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
      ${
        danger
          ? "text-red-500 hover:bg-red-500/10"
          : "hover:bg-black/5 dark:hover:bg-white/10"
      }`}
  >
    {icon}
    <span>{text}</span>
  </div>
);
