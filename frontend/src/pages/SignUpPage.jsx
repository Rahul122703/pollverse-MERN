import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmitDetails = (e) => {
    e.preventDefault();

    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("OTP sent to your email");
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (!form.otp) {
      toast.error("Enter OTP");
      return;
    }

    toast.success("Account created successfully");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black">
      <div
        className="
          w-full max-w-sm sm:max-w-md
          rounded-3xl
          bg-white/90 dark:bg-gray-900/80
          backdrop-blur-xl
          border border-gray-200 dark:border-white/10
          shadow-xl
          p-6 sm:p-8
        "
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Create account
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {step === 1
              ? "Join Pollverse and start voting"
              : "Enter the OTP sent to your email"}
          </p>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <form onSubmit={handleSubmitDetails} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="
                w-full rounded-xl px-4 py-3
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                placeholder-gray-400
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="
                w-full rounded-xl px-4 py-3
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                placeholder-gray-400
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="
                w-full rounded-xl px-4 py-3
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                placeholder-gray-400
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="
                w-full rounded-xl px-4 py-3
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                placeholder-gray-400
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

            <button
              type="submit"
              className="
                w-full py-3 rounded-xl
                bg-indigo-600 hover:bg-indigo-700
                text-white font-medium
                transition
              "
            >
              Send OTP
            </button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <NavLink to="/auth">
                <span className="ml-1 underline cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400">
                  Login
                </span>
              </NavLink>
            </p>
          </form>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={form.otp}
              onChange={handleChange}
              className="
                w-full text-center text-xl tracking-widest
                rounded-xl px-4 py-3
                bg-gray-50 dark:bg-gray-800
                text-gray-900 dark:text-white
                placeholder-gray-400
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-indigo-500
                outline-none
              "
            />

            <button
              type="submit"
              className="
                w-full py-3 rounded-xl
                bg-emerald-600 hover:bg-emerald-700
                text-white font-medium
                transition
              "
            >
              Verify & Create Account
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-sm underline text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Change details
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
