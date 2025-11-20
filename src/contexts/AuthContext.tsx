import React, { createContext, useState, useEffect,type ReactNode} from "react";
import { type User } from "../services/api";
import { type GooglePayload } from "../components/GoogleLoginButton";
import { useToast } from "../hooks/ToastContext";
interface AuthContextType{
    user:User |null;
    googleUser:GooglePayload |null;
    token:string |null;
    isLoggedIn:boolean ; 
    googleLogin:(googledata:GooglePayload)=>void;
    login:(userData:User,tokenData:string)=>void;
    logout:()=>void;
    
}
interface AuthProviderProps{
    children:ReactNode;
}

export const AuthContext = createContext<AuthContextType |null >(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const toast=useToast();
  const [user, setUser] = useState<User |null >(null);
  const [googleUser,setGoogleUser]=useState<GooglePayload |null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedGoogleUser=localStorage.getItem("googleUser");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }else if(storedGoogleUser){
      setGoogleUser(JSON.parse(storedGoogleUser));
    }
  }, []);

  const login = (userData: any, tokenData: string) => {
    localStorage.setItem("token", tokenData);
    localStorage.setItem("user", JSON.stringify(userData));
    toast.success("Login Successfull");
    setUser(userData);
    setToken(tokenData);
  };
  const googleLogin=(googleData:GooglePayload)=>{
    localStorage.setItem("googleUser",JSON.stringify(googleData));
    toast.success("Login Successfull");
    setGoogleUser(googleData);
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("googleUser");
    setUser(null);
    setGoogleUser(null);
    setToken(null);
    toast.info("You have been logged out.")
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ user, token,googleUser,googleLogin, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
