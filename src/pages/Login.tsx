import React, { useContext, useState } from 'react'; 
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginUser, type LoginRequest } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import GoogleLoginButton from '../components/GoogleLoginButton';

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const handleForm = async (data: LoginFormInputs) => {
    setError("");
    setLoading(true);

    try {
      const request: LoginRequest = { email: data.email, password: data.password };
      const res = await loginUser(request);
      if(res.user){
        auth?.login(res.user, res.access_token);
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center   ">
      <h1 className="text-4xl font-extrabold text-black mb-8 ">Login</h1>

      <form 
        className=" text-gray-800 p-8  w-full max-w-sm flex flex-col gap-2"
        onSubmit={handleSubmit(handleForm)}
      >
        {error && (
          <p className="bg-red-100 text-red-700 text-center py-2 rounded-md">{error}</p>
        )}

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Email</label>
          <input 
            type="text" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Password</label>
          <input 
            type="password" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            {...register("password", { required: "Password is required" })}
          />
        </div>

        {/* Login Button */}
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors duration-300"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center justify-center my-2">
          <span className="text-gray-400">or</span>
        </div>
        <GoogleLoginButton  />

        {/* Signup Link */}
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-500 font-medium hover:underline">
            Sign up here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
