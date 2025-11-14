import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastProvider } from "./hooks/ToastContext";

const cliendId =process.env.REACT_APP_GOOGLE_OAUTH_KEY as string;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <GoogleOAuthProvider clientId={cliendId}>
            <App />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
