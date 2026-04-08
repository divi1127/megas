import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/account');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[80px] -z-0"></div>
        
        <div className="relative z-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-dark mb-2">Welcome Back!</h1>
            <p className="text-gray-500">Login to manage your orders and appointments.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Mail size={16} className="text-brand-blue" /> Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                placeholder="yours@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Lock size={16} className="text-brand-blue" /> Password
                </label>
                <button type="button" className="text-xs font-bold text-brand-blue hover:underline">Forgot?</button>
              </div>
              <input
                type="password"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all bg-gray-50/50"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <LogIn size={20} /> Login
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/signup" className="text-brand-blue font-bold text-lg hover:underline flex items-center justify-center gap-2 mt-2">
               Create Account <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
