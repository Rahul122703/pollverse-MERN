import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ googleLogin }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
          Welcome to
          <span className="block text-indigo-600 dark:text-indigo-400">
            Pollverse
          </span>
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Create polls and share your opinion with the world
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
        <span className="text-xs uppercase text-gray-500">Continue with</span>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
      </div>

      <button
        onClick={googleLogin}
        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        <FcGoogle size={22} />
        <span className="font-medium">Continue with Google</span>
      </button>

      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        By continuing, you agree to our
        <span className="mx-1 underline cursor-pointer">Terms</span>
        and
        <span className="mx-1 underline cursor-pointer">Privacy Policy</span>.
      </p>
    </div>
  );
};

export default SocialLogin;
