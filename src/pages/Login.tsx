import React, { useContext, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { loginUser, type LoginRequest } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const request: LoginRequest = { email, password };
      const data = await loginUser(request);
      if(data.user){
        auth?.login(data.user, data.access_token);
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h1 className="text-4xl font-extrabold text-black mb-8 drop-shadow-lg">SmartKrishi Login</h1>

      <form 
        className="bg-white text-gray-800 p-8 rounded-xl shadow-xl w-full max-w-sm flex flex-col gap-6"
        onSubmit={handleForm}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Password</label>
          <input 
            type="password" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
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
      </form>
    </div>
  );
};

export default Login;
