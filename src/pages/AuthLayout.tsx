import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const AuthLayout: React.FC = () => {
  const { mode } = useParams<{ mode: string }>();
  const navigate = useNavigate();
  const isLogin = mode === "login";

  return (
    <div className="flex h-screen w-full bg-gray-200 overflow-hidden">

      {/* Signup Panel */}
      <div
        className={`
          transition-all duration-700 ease-in-out
          ${isLogin ? "w-[40%]" : "w-[60%]"}
          bg-white shadow-xl flex justify-center items-center relative
        `}
      >
        {/* Overlay when Login is active */}
        {isLogin && (
          <div
            className="absolute inset-0 flex text-white flex-col gap-2 items-center justify-center z-10
            bg-green-500 rounded-e-[20%] transition-all duration-700 
            "
          >
            <h1 className="font-bold text-4xl">Hello, Welcome !</h1>
            <p className="font-bold text-lg">don't have an account?</p>
            <button
              onClick={() => navigate("/auth/signup")}
              className="px-10 py-2 font-semibold  rounded-xl border-2 border-white shadow-md  transition"
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Signup Form */}
        <div
          className={`
            transition-all duration-700 transform w-full
            ${isLogin ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}
          `}
        >
          <Signup />
        </div>
      </div>

      {/* Login Panel */}
      <div
        className={`
          transition-all duration-700 ease-in-out
          ${isLogin ? "w-[60%]" : "w-[40%]"}
          bg-gray-50 shadow-xl flex justify-center items-center relative
        `}
      >
        {/* Overlay when Signup is active */}
        {!isLogin && (
          <div
            className="absolute inset-0 flex gap-2 text-white flex-col items-center justify-center z-10
            bg-green-500 rounded-s-[20%] transition-all duration-700"
          >
            <h1 className="font-bold text-4xl">Welcome Back!</h1>
            <p className="font-bold text-lg">Already have an account?</p>
            <button
              onClick={() => navigate("/auth/login")}
              className="px-10 py-2 font-semibold  rounded-xl border-2 border-white shadow-md  transition"
            >
              login
            </button>
          </div>
        )}

        {/* Login Form */}
        <div
          className={`
            transition-all duration-700 transform w-full
            ${isLogin ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
          `}
        >
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
