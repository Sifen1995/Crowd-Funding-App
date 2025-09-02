import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import DropdownMenu from '../cards/DropDown';

// This Header component now has a consistent design with the Payment page,
// using matching colors, spacing, and component styles.
export default function Header() {

   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <header className="bg-white text-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="InnovateFund Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">INNOVATE<br />FUND</span>
        </div>

        {/* Search bar, hidden on small screens */}
        <div className="flex-1 max-w-lg mx-8 hidden md:block">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#6A5A82] focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium hidden md:block">
            Home
          </Link>
          <Link to="/create-campaign" className="text-gray-600 hover:text-gray-900 font-medium hidden md:block">
            Create a campaign
          </Link>
        </nav>

        {/* Login button */}

        {isLoggedIn?<DropdownMenu/> :(
           <Link 
          to="/login"
          className="bg-[#6A5A82] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#584C69] transition-colors duration-200 ml-4"
        >
          Log in
        </Link>
        ) }
        
      </div>
    </header>
  );
}
