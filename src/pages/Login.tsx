import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, LoginRequest } from '../services/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token,setToken]=useState<unknown>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate= useNavigate();
   
   useEffect(()=>{
    if(token){
    navigate("/");

   }

   },[token]);
  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);


    try {
      const request: LoginRequest = { email, password };
      const data = await loginUser(request);
      setToken(localStorage.getItem(data.access_token));
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Login Successful", data);

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
