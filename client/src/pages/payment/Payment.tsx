import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';

// Import payment method icons
import applePay from '../../assets/images/apple-pay.png';
import mastercard from '../../assets/images/card.png';
import amex from '../../assets/images/american-express-logo.png';
import visa from '../../assets/images/visa.png';
import discover from '../../assets/images/discover.png';
import paypal from '../../assets/images/paypal.png';
import googlePay from '../../assets/images/google-pay.png';

// Import the reusable Header and Footer components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

// This is the final Payment component with the correct branding, colors, design, and routing.
const Payment = () => {
  const [amount, setAmount] = useState<string>('10');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const handleAmountClick = (value: string) => {
    setAmount(value);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value);
    setIsCustom(true);
  };

  const total = parseFloat(amount || '0').toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted with amount:', amount);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Use the shared Header component */}
      <Header />

      <main className="container mx-auto p-4 md:p-8">
        <div className="text-center py-10">
          <h2 className="text-5xl font-bold text-gray-800">Donation</h2>
        </div>

        {/* Donation Form Container */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 w-full max-w-4xl mx-auto space-y-8">
          
          {/* Top Section with Image and Text */}
          <div className="flex items-center space-x-6">
            <img 
              src="https://placehold.co/120x80/6A5A82/ffffff?text=Image" 
              alt="Donation Cause" 
              className="rounded-lg shadow"
            />
            <div>
              <p className="text-lg text-gray-700">
                You're supporting <span className="font-semibold">Donate & Help Kids</span>
              </p>
              <p className="text-lg text-gray-700">
                Your donation will benefit <span className="font-semibold">Name Lorem Ipsum</span>
              </p>
            </div>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Info</h3>
              </div>
              <div className="space-y-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">
                  Home Address*
                </label>
                <input
                  type="text"
                  id="homeAddress"
                  name="homeAddress"
                  placeholder="Home Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Payment Options */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-600 text-sm">
                You can make charitable donations to our organization by filling out the form below. We accept debit/credit cards, as well as PayPal.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* Payment Icons */}
                <img src={applePay} alt="Apple Pay" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/applepay.svg')} />
                <img src={mastercard} alt="Mastercard" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/mastercard.svg')} />
                <img src={amex} alt="Amex" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/amex.svg')} />
                <img src={visa} alt="Visa" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/visa.svg')} />
                <img src={discover} alt="Discover" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/discover.svg')} />
                <img src={paypal} alt="PayPal" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/paypal.svg')} />
                <img src={googlePay} alt="Google Pay" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/googlepay.svg')} />
              </div>
            </div>

            {/* Credit Card Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Method</h3>
              </div>
              <div className="space-y-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                  Name on card*
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  placeholder="Name on card"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry*
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number*
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 1234 1234 1234"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV*
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="***"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Amount Selection */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Donation Amount
              </label>
              <div className="flex flex-wrap gap-3">
                {['5', '10', '50', '100', '500'].map((value) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => handleAmountClick(value)}
                    className={`
                      flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200
                      ${amount === value ? 'bg-[#6A5A82] text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                    `}
                  >
                    ${value}
                  </button>
                ))}
                <div className="flex-1 min-w-[120px]">
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="Custom Amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Donation Total */}
            <div className="flex items-center justify-between text-lg font-bold text-gray-800 mt-6">
              <span>Donation Total</span>
              <span>${total}</span>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#6A5A82] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-[#584C69] transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
              >
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Use the shared Footer component */}
      <Footer />
    </div>
  );
};

export default Payment;