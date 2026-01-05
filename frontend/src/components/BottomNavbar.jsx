import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiPhone, FiCode, FiUser } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleProfileDropdown } from "../redux/slices/UIslice";

const BottomNavbar = () => {
  const dispatch = useDispatch();

  return (
    <nav
      className="
        md:hidden fixed bottom-0 left-0 right-0 
        flex justify-around py-3
        backdrop-blur-xl
        bg-white/80 dark:bg-gray-900/80
        border-t dark:border-gray-800 rounded-t-2xl
        z-50
      "
    >
      <NavIcon to="/" icon={<FiHome />} />
      <NavIcon to="/about" icon={<FiInfo />} />
      <NavIcon to="/contact" icon={<FiPhone />} />
      <NavIcon to="/developer" icon={<FiCode />} />

      {/* Profile (opens slide panel, not a route) */}
      <button
        onClick={() => dispatch(toggleProfileDropdown())}
        className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
      >
        <FiUser size={22} />
      </button>
    </nav>
  );
};

export default BottomNavbar;

/* ---------- NAV ICON ---------- */

const NavIcon = ({ to, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      p-2 rounded-lg transition
      ${
        isActive
          ? "bg-black/10 dark:bg-white/20"
          : "hover:bg-black/5 dark:hover:bg-white/10"
      }
    `
    }
  >
    <span className="text-gray-700 dark:text-gray-200">
      {icon}
    </span>
  </NavLink>
);
