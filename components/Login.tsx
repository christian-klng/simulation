import React, { useState } from 'react';
import { Loader2, AlertCircle, LogIn } from 'lucide-react';
import { APPS_SCRIPT_URL, AVATAR_COLORS } from '../constants';
import { AuthUser } from '../types';

interface LoginProps {
  onLogin: (user: AuthUser) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const getAvatarColor = (username: string) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % AVATAR_COLORS.length;
    return AVATAR_COLORS[index];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (APPS_SCRIPT_URL.includes('AKfycbx...')) {
        // Fallback for demo purposes if URL isn't set
        setTimeout(() => {
            if (formData.username === 'demo' && formData.password === 'demo') {
                onLogin({
                    username: 'demo',
                    name: 'Demo User',
                    apiKey: 'demo-key',
                    color: getAvatarColor('demo')
                });
            } else {
                setStatus('error');
                setErrorMsg('Script URL not configured. Use demo/demo to test UI.');
            }
        }, 1000);
        return;
    }

    try {
      // Use standard text/plain to avoid CORS preflight issues with simple requests to GAS
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({
          action: 'login',
          username: formData.username,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        onLogin({
          username: data.username,
          // Use name if returned by script, otherwise fallback to username
          name: data.name || data.username, 
          apiKey: data.apiKey,
          color: getAvatarColor(data.username)
        });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Connection failed. Please check your internet or the script URL.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg transform rotate-3">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
             </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight">
            Sign in to ChakraDash
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your credentials to access the dashboard
          </p>
        </div>
        
        <form className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100" onSubmit={handleSubmit}>
          {status === 'error' && (
            <div className="rounded-md bg-red-50 p-4 border border-red-100">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Login Failed
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>{errorMsg}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="rounded-md space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {status === 'loading' ? (
                  <Loader2 className="h-5 w-5 text-indigo-300 animate-spin" />
                ) : (
                  <LogIn className="h-5 w-5 text-indigo-300 group-hover:text-indigo-200" />
                )}
              </span>
              {status === 'loading' ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          
          <div className="text-xs text-center text-gray-400 mt-4">
             {APPS_SCRIPT_URL.includes('AKfycbx...') ? 'Note: Configure APPS_SCRIPT_URL in constants.tsx' : 'Protected by Google Apps Script Authentication'}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;