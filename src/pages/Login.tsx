// src/pages/Login.tsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from "../components/firebaseconfig/firebaseconfig";

// Add Facebook SDK type declarations
declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (config: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      // Add other FB methods if needed
    };
  }
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { loginWithGoogle, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '1102166627980497',
        cookie: true,
        xfbml: true,
        version: 'v14.0',
      });
    };

    // Load Facebook SDK script with proper typing
    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      navigate('/settings');
    } catch (error: any) {
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/settings');
    } catch (error) {
      setError('Google login failed. Please try again.');
    }
  };

  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    // Add required scopes
    provider.addScope('pages_manage_posts');
    provider.addScope('pages_read_engagement');
    provider.addScope('ads_management');
    provider.addScope('business_management');

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Facebook Login Success:", result.user);
      navigate('/settings');
    } catch (error: any) {
      console.error("Facebook Login Error:", error);
      setError('Facebook login failed. Please try again.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <button type="submit" className="btn btn-primary w-full">
          Log In
        </button>
      </form>

      <div className="my-4 flex items-center justify-center">
        <span className="text-gray-500">or</span>
      </div>

      <button onClick={handleGoogleLogin} className="btn btn-primary w-full bg-red-500 hover:bg-red-600">
        Log In with Google
      </button>

      <button onClick={handleFacebookLogin} className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700 mt-4">
        Log In with Facebook
      </button>

      <p className="mt-4 text-center">
        Don’t have an account?{' '}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;