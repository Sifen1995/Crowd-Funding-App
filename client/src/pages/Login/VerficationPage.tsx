// src/pages/VerificationPage/VerificationPage.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png'


// Components
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button
    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

const Input: React.FC<InputProps> = ({ className, type = 'text', ...props }) => (
  <input
    className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200 ${className}`}
    type={type}
    {...props}
  />
);

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-500 text-white rounded-xl shadow-lg flex items-center space-x-2 z-50 animate-fade-in-down">
      <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
      <span>{message}</span>
    </div>
  );
};

const VerificationPage = () => {
  const location = useLocation();
  const initialEmail = location.state?.email || '';
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const onLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    // Manual validation
    if (!email) {
      setEmailError("Email is required.");
    }
    if (!password) {
      setPasswordError("Password is required.");
    }
    if (emailError || passwordError) {
      return;
    }

    console.log("Login data:", { email, password });
    setMessage("Login successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 font-sans">
      {message && <SuccessMessage message={message} />}
      <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6 max-h-screen overflow-y-scroll relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-[#6A5A82] [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="InnovateFund Logo" className="h-12 w-auto" />
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Sign in</h1>
        <form onSubmit={onLoginSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <a href="#" className="block text-sm text-[#6A5A82] font-medium hover:underline mb-4">
            Forgot your password?
          </a>
          <p className="text-sm text-gray-500 mt-2">
            By clicking the Sign In button below, you agree to the InnovateFund
            <a href="#" className="text-[#6A5A82] hover:underline font-medium"> Terms of Service</a> and acknowledge the
            <a href="#" className="text-[#6A5A82] hover:underline font-medium"> Privacy Notice</a>.
          </p>
          <Button type="submit" className="bg-[#6A5A82] hover:bg-[#584C69] text-white">Sign in</Button>
        </form>
        <div className="text-center mt-8">
          <button onClick={() => navigate('/login')} className="text-gray-600 hover:text-gray-900 font-medium">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;