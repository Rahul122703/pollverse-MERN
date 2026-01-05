import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeSearchModal } from "../redux/slices/UIslice";
import { FiX, FiSearch } from "react-icons/fi";

const SearchModal = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // Auto focus input when modal opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={() => dispatch(closeSearchModal())}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div
        className="
          relative z-10
          w-[92%] max-w-md
          rounded-2xl
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-2xl
          p-5
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            Search
          </h2>

          <button
            onClick={() => dispatch(closeSearchModal())}
            className="
              p-1 rounded-md
              hover:bg-black/5 dark:hover:bg-white/10
            "
          >
            <FiX className="text-gray-700 dark:text-gray-300" size={18} />
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div
          className="
            flex items-center gap-2
            px-3 py-2
            rounded-xl
            border border-gray-300 dark:border-gray-700
            bg-gray-50 dark:bg-gray-800
            focus-within:ring-2 focus-within:ring-blue-500
          "
        >
          <FiSearch className="text-gray-500 dark:text-gray-400" />

          <input
            ref={inputRef}
            type="text"
            placeholder="Search polls..."
            className="
              w-full bg-transparent outline-none
              text-sm text-gray-900 dark:text-gray-100
              placeholder-gray-500 dark:placeholder-gray-400
            "
          />
        </div>

        {/* FOOTER (optional hint) */}
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Type to search polls, users, or topics
        </p>
      </div>
    </div>
  );
};

export default SearchModal;
