import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleProfileDropdown } from "../redux/slices/UIslice";
import {
  FiUser,
  FiHome,
  FiInfo,
  FiPhone,
  FiCode,
  FiShield,
} from "react-icons/fi";
import ProfileSlidePanel from "./ProfileSlidePanel.jsx";

const Navbar = () => {
  const dispatch = useDispatch();
  const { themeMode, isProfileOpen } = useSelector((state) => state.UI);

  useEffect(() => {
    const root = document.documentElement;
    themeMode === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [themeMode]);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className="
          hidden md:flex 
          fixed top-4 left-1/2 -translate-x-1/2 
          w-[92%] max-w-7xl
          items-center justify-between 
          px-8 py-4
          rounded-2xl
          backdrop-blur-xl
          bg-white/70 dark:bg-gray-900/60
          border border-white/40 dark:border-gray-700/50
          shadow-lg z-50
        "
      >
        {/* NAV LINKS */}
        <div className="flex gap-8 text-sm text-gray-700 dark:text-gray-200">
          <NavItem to="/" icon={<FiHome />} label="Polls" />
          <NavItem to="/about" icon={<FiInfo />} label="About Us" />
          <NavItem to="/contact" icon={<FiPhone />} label="Contact Us" />
          <NavItem to="/developer" icon={<FiCode />} label="Developer" />
          <NavItem to="/admin" icon={<FiShield />} label="Admin" />
        </div>

        {/* PROFILE BUTTON */}
        <button
          onClick={() => dispatch(toggleProfileDropdown())}
          className="
            w-10 h-10 rounded-full 
            flex items-center justify-center
            bg-white/60 dark:bg-gray-800/60
            border border-white/40 dark:border-gray-700/50
            hover:scale-105 transition
          "
        >
          <FiUser />
        </button>
      </nav>

      {/* SLIDE PANEL */}
      {isProfileOpen && <ProfileSlidePanel />}
    </>
  );
};

export default Navbar;

/* ---------- NAV ITEM ---------- */

const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      flex items-center gap-2
      px-3 py-2 rounded-lg
      transition-colors
      ${
        isActive
          ? "bg-black/10 dark:bg-white/20 font-medium"
          : "hover:bg-black/5 dark:hover:bg-white/10"
      }
    `
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);
