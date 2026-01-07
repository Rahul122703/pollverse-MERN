import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const NormalLogin = () => {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.identifier || !form.password) {
      toast.error("All fields are required");
      return;
    }

    toast.success("Login API hit (connect backend)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Login to Pollverse
        </h2>
      </div>

      <input
        type="text"
        name="identifier"
        value={form.identifier}
        onChange={handleChange}
        placeholder="Username or Email"
        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
      >
        Sign In
      </button>

      {/* Signup link */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        Don’t have an account?
        <NavLink to="/signup">
          <span className="ml-1 underline cursor-pointer text-indigo-600 dark:text-indigo-400 hover:opacity-80">
            Signup
          </span>
        </NavLink>
      </p>
    </form>
  );
};

export default NormalLogin;
