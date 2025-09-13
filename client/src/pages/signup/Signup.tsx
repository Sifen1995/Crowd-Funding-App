// src/pages/Signup/Signup.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/bg.jpg'; // Import your background image


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

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Automatically hide the success message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const validateForm = () => {
    let isValid = true;

    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setTermsError('');

    if (!firstName) {
      setFirstNameError("First name is required.");
      isValid = false;
    }

    if (!lastName) {
      setLastNameError("Last name is required.");
      isValid = false;
    }

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address.");
      isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (password.length < 12) {
      setPasswordError("Password must be at least 12 characters.");
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    }

    if (!termsAccepted) {
      setTermsError("You must accept the terms and privacy policy.");
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Signup data:", {
        firstName,
        lastName,
        email,
        password,
      });
      setMessage("Signup successful!");
    }
  };

  // Define the style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    // Apply the background style to the outermost div
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={backgroundStyle}
    >
      {message && <SuccessMessage message={message} />}
      <div
        className="relative w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-screen overflow-y-scroll bg-opacity-90"
      >
        <Link
          to="/login"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
        </Link>
        <div className="flex justify-center">
          <img
            src={logo}
            alt="InnovateFund Logo"
            className="h-auto w-[200px]"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-4">Create an account</h1>
        <div className="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#6A5A82] hover:text-purple-800 font-semibold"
          >
            Sign in
          </Link>
        </div>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameError && (
                <p className="text-red-500 text-sm mt-1">{firstNameError}</p>
              )}
            </div>
            <div className="flex-1">
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {lastNameError && (
                <p className="text-red-500 text-sm mt-1">{lastNameError}</p>
              )}
            </div>
          </div>
          <div>
            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
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
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          <div className="relative">
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>
            )}
          </div>
          <div className="bg-purple-100 p-4 rounded-xl text-gray-700 space-y-2">
            <p className="font-semibold text-sm">Your password must have at least:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Minimum 12 characters</li>
              <li>1 uppercase letter</li>
              <li>1 lowercase letter</li>
              <li>1 number</li>
              <li>1 symbol</li>
            </ul>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1"
            />
            <label>
              By clicking the Sign Up button below, you agree to the InnovateFund{" "}
              <a href="#" className="underline text-[#6A5A82] hover:text-purple-800">
                Terms of Service
              </a>{" "}
              and acknowledge the{" "}
              <a href="#" className="underline text-[#6A5A82] hover:text-purple-800">
                Privacy Notice
              </a>.
            </label>
          </div>
          {termsError && (
            <p className="text-red-500 text-sm mt-1">{termsError}</p>
          )}
          <Button
            type="submit"
            className="bg-[#6A5A82] hover:bg-purple-800 text-white"
          >
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;