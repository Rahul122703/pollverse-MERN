import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "../redux/slices/Uislice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.UI.themeMode);

  useEffect(() => {
    const root = document.documentElement;

    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
      <button
        onClick={() => dispatch(toggleThemeMode())}
        className="px-6 py-3 rounded-lg 
                   bg-gray-200 text-black 
                   dark:bg-gray-700 dark:text-white
                   transition-all"
      >
        {themeMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
