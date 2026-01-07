import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { googleAuth } from "../api";
import { setGoogleUser } from "../redux/slices/AuthSlice";
import { setAuthTab } from "../redux/slices/Uislice";
import { NormalLogin, SocialLogin } from "../components";

const VIDEO_BG_CDN =
  "https://static.vecteezy.com/system/resources/previews/025/324/980/mp4/halftone-dots-abstract-digital-technology-animated-yellow-light-on-black-background-free-video.mp4";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authTab } = useSelector((state) => state.UI);

  const responseGoogle = async (authData) => {
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
    } catch {
      toast.error("Google login failed");
    }
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: responseGoogle,
    onError: () => toast.error("Google login failed"),
  });

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEO_BG_CDN} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Auth Card */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-5 sm:p-7">
        {/* Tabs */}
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 mb-6">
          {["login", "Other ways"].map((tab) => (
            <button
              key={tab}
              onClick={() =>
                dispatch(
                  setAuthTab(tab === "login" ? "NormalLogin" : "SocialLogin")
                )
              }
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all
                ${
                  authTab === (tab === "login" ? "NormalLogin" : "SocialLogin")
                    ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow"
                    : "text-gray-600 dark:text-gray-400"
                }
              `}
            >
              {tab === "login" ? "Login" : "Other ways"}
            </button>
          ))}
        </div>

        {authTab === "SocialLogin" ? (
          <SocialLogin googleLogin={googleLogin} />
        ) : (
          <NormalLogin />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
