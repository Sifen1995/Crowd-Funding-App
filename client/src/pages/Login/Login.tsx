// src/pages/Login/Login.tsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, type LoginForm } from './../../schemas/LoginSchema.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

// Define a type for the Button component's props
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

// Define a type for the Input component's props
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

// New component for the success message
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

const Login = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });

  // Automatically hide the success message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const onEmailSubmit = (data: LoginForm) => {
    console.log("Email submitted:", data.email);
    // Navigate to the verification page
    navigate('/login/verify');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      {/* Conditionally render the success message */}
      {message && <SuccessMessage message={message} />}

      <div
        className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 space-y-6 max-h-screen overflow-y-scroll relative
        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:bg-[#6A5A82] [&::-webkit-scrollbar-thumb]:rounded-full
        "
      >
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
        </Link>
        <div className="flex justify-center">
          <img
            src="../../images/logo.png"
            alt="InnovateFund Logo"
            className="h-12 w-auto"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900">Welcome</h1>
        <p className="text-center text-gray-600">
          Sign in to your InnovateFund account or sign up to continue.
        </p>

        <div className="space-y-4">
          <Button
            className="!bg-white text-gray-700 border border-gray-300 hover:!bg-gray-100 flex items-center justify-center gap-3"
          >
            <FontAwesomeIcon icon={faGoogle} className="text-xl" />
            Continue with Google
          </Button>
          <Button
            className="!bg-white text-gray-700 border border-gray-300 hover:!bg-gray-100 flex items-center justify-center gap-3"
          >
            <FontAwesomeIcon icon={faApple} className="text-xl" />
            Continue with Apple
          </Button>
        </div>

        <div className="flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form onSubmit={handleSubmit(onEmailSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Email Address" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="bg-[#6A5A82] hover:bg-[#584C69] text-white"
          >
            Continue
          </Button>
        </form>

        <div className="text-center">
          <h6 className="text-sm text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#6A5A82] hover:text-[#584C69] font-semibold"
            >
              Sign up
            </Link>
          </h6>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="underline hover:text-gray-700">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-gray-700">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default Login;