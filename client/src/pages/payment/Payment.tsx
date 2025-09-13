import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faTimes } from '@fortawesome/free-solid-svg-icons';
import bg from '../../assets/images/bg.jpg';
import donation from '../../assets/images/donate.jpg';

// Import payment method icons
import applePay from '../../assets/images/apple-pay.png';
import mastercard from '../../assets/images/card.png';
import amex from '../../assets/images/american-express-logo.png';
import visa from '../../assets/images/visa.png';
import discover from '../../assets/images/discover.png';
import paypal from '../../assets/images/paypal.png';
import googlePay from '../../assets/images/google-pay.png';

// Define the type for the project data
interface ProjectData {
  id: string;
  title: string;
  goal: number;
  pledged: number;
  backers: number;
}

// Define the type for the state object passed from the Project component
interface LocationState {
  project?: ProjectData;
}

const Payment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState; // Cast the state to our defined type
  const { project } = state || {}; // Access the project data from the state, with a fallback
  
  const [amount, setAmount] = useState<string>('10');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false); // State to control the modal

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
    console.log(`Donation submitted for project: ${project?.title || 'Unknown'}`);
    console.log('Amount:', amount);

    // Display a custom modal instead of a native alert
    setShowModal(true);
    
    // In a real application, you would send a request to your backend
    // to process the payment and update the project's total.
  };

  const backgroundStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="font-sans" style={backgroundStyle}>
      {/* Exit Button at the top right */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
          aria-label="Exit"
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
        </button>
      </div>

      <main className="container mx-auto p-4 md:p-8">
        <div className="text-center py-10">
          <h2 className="text-5xl font-bold text-gray-800">Donation</h2>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 w-full max-w-4xl mx-auto space-y-8">
          
          <div className="flex items-center space-x-6">
            <img 
              src={donation}
              alt="Donation Cause" 
              className="rounded-lg shadow w-32"
            />
            <div>
              <p className="text-lg text-gray-700">
                You're supporting <span className="font-semibold">{project?.title || 'a worthy cause'}</span>
              </p>
              <p className="text-lg text-gray-700">
                Your donation will benefit <span className="font-semibold">Name Lorem Ipsum</span>
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Personal Info</h3>
              </div>
              <div className="space-y-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name*
                </label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="space-y-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name*
                </label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="md:col-span-2 space-y-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address*
                </label>
                <input type="email" id="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="md:col-span-2 space-y-4">
                <label htmlFor="homeAddress" className="block text-sm font-medium text-gray-700">
                  Home Address*
                </label>
                <input type="text" id="homeAddress" name="homeAddress" placeholder="Home Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="space-y-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City*
                </label>
                <input type="text" id="city" name="city" placeholder="City" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="space-y-4">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State*
                </label>
                <input type="text" id="state" name="state" placeholder="State" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <p className="text-gray-600 text-sm">
                You can make charitable donations to our organization by filling out the form below. We accept debit/credit cards, as well as PayPal.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <img src={applePay} alt="Apple Pay" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/applepay.svg')} />
                <img src={mastercard} alt="Mastercard" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/mastercard.svg')} />
                <img src={amex} alt="Amex" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/amex.svg')} />
                <img src={visa} alt="Visa" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/visa.svg')} />
                <img src={discover} alt="Discover" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/discover.svg')} />
                <img src={paypal} alt="PayPal" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/paypal.svg')} />
                <img src={googlePay} alt="Google Pay" className="h-6" onError={(e) => (e.currentTarget.src = 'https://www.paypalobjects.com/paypal-ui/card-icons/googlepay.svg')} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Method</h3>
              </div>
              <div className="space-y-4">
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                  Name on card*
                </label>
                <input type="text" id="cardName" name="cardName" placeholder="Name on card" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="space-y-4">
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                  Expiry*
                </label>
                <input type="text" id="expiry" name="expiry" placeholder="MM/YY" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="space-y-4">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number*
                </label>
                <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 1234 1234 1234" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
              <div className="space-y-4">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV*
                </label>
                <input type="text" id="cvv" name="cvv" placeholder="***" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200" required />
              </div>
            </div>

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

            <div className="flex items-center justify-between text-lg font-bold text-gray-800 mt-6">
              <span>Donation Total</span>
              <span>${total}</span>
            </div>

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

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your donation of ${total} to "{project?.title || 'this project'}" has been submitted successfully.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#6A5A82] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#584C69] transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
