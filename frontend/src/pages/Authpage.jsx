import React from "react";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const handleGoogleAuth = () => {
    console.log("Google Auth Clicked");
  };

  return (
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        px-4
        bg-gradient-to-br
        from-indigo-500 via-purple-500 to-pink-500
        dark:from-gray-900 dark:via-gray-900 dark:to-black
      "
    >
      {/* Center Card */}
      <div
        className="
          w-full max-w-md
          rounded-2xl
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          shadow-xl
          p-8 sm:p-10
        "
      >
        {/* Brand */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Welcome to
            <span className="text-indigo-600 dark:text-indigo-400">
              Pollverse
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Sign in to create polls and share your opinion with the world
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          <span className="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">
            Continue with
          </span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Google Button */}
        <button
          onClick={handleGoogleAuth}
          className="
            w-full
            flex items-center justify-center gap-3
            py-3
            rounded-xl
            bg-white dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            text-gray-800 dark:text-gray-200
            font-medium
            shadow-sm
            hover:shadow-md
            hover:bg-gray-50 dark:hover:bg-gray-700
            hover:-translate-y-0.5
            active:translate-y-0
            transition-all
          "
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          By continuing, you agree to our
          <span className="underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
            Terms
          </span>
          and
          <span className="underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
