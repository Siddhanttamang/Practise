import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const cliendId="266969033461-kvv64alile2p7v66katn1j5hpoi4n2am.apps.googleusercontent.com"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={cliendId}>

      <AuthProvider>

        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
