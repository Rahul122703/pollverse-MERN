import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import { setGoogleUser } from "../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reponseGoogle = async (authData) => {
    try {
      if (authData.code) {
        const result = await googleAuth(authData.code);

        const user = {
          name: result.name,
          email: result.email,
          profileImage: result.picture,
        };

        dispatch(setGoogleUser(user));

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", result.token);

        toast.success(`Welcome ${user.name}`);

        navigate("/");
      }
    } catch (error) {
      toast.error("Google login failed");
      console.error(error);
    }
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: reponseGoogle,
    onError: () => toast.error("Google login failed"),
  });

  return (
    <div
      className="
        min-h-screen w-full
        flex items-center justify-center
        px-4
        bg-linear-to-br
        from-indigo-500 via-purple-500 to-pink-500
        dark:from-gray-900 dark:via-gray-900 dark:to-black
      "
    >
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
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Welcome to
            <span className="text-indigo-600 dark:text-indigo-400 mx-3">
              Pollverse
            </span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Sign in to create polls and share your opinion with the world
          </p>
        </div>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          <span className="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">
            Continue with
          </span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
        </div>

        <button
          onClick={() => googleLogin()}
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

        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          By continuing, you agree to our
          <span className="mx-1 underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
            Terms
          </span>
          and
          <span className="mx-1 underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-200">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
