import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useToast } from "../hooks/ToastContext";
import { loginUser, type LoginRequest } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>();
  const toast=useToast();
  const auth=useContext(AuthContext);
  const navigate=useNavigate();

  const onSubmit = async (data: SignupFormData) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      toast.success("User Registered successfully")
      try {
            const request: LoginRequest = { email: data.email, password: data.password };
            const res = await loginUser(request);
            if(res.user){
              auth?.login(res.user, res.access_token);
              navigate("/");
            }
          } catch (err: any) {
            toast.error(err.message);
          } 
      reset();
      
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-4xl font-extrabold text-black mb-8 drop-shadow-2xl">
        Register
      </h1>

      <form
        className="bg-white text-gray-800 p-8 rounded-xl shadow-xl w-full max-w-lg flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Username */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Username</label>
          <input
            type="text"
            {...register("name", {
              required: "Username is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
            })}
            className="border border-gray-300 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
            className="border border-gray-300 rounded-lg px-4 py-2 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>


        {/* Password */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            className="border border-gray-300 rounded-lg px-4 py-2
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg 
          transition-all duration-300"
        >
          {isSubmitting ? "Signing up..." : "Sign Up"}
        </button>
         <div className="flex items-center justify-center my-2">
          <span className="text-gray-400">or</span>
        </div>
        <GoogleLoginButton  />
      </form>
    </div>
  );
};

export default Signup;
