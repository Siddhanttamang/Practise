import React, { useContext, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { loginUser, LoginRequest } from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';

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
      auth?.login(data.access_token, data.user);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-container'>
      {error && <h1 className='error-box'>{error}</h1>}
      <form className='login-form' onSubmit={handleForm}>
        Email: 
        <input 
          type="text" 
          className='input_field' 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>

        Password: 
        <input 
          type="password" 
          className='password_field' 
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
