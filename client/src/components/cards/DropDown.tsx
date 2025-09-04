import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Assuming you have this asset
import userAvatar from '../../assets/images/profile icon.png';

// Define the type for a user link
interface UserLink {
  name: string;
  to: string;
}

const userLinks: UserLink[] = [
  { name: 'Dashboard', to: '/dashboard' },
  { name: 'Profile Settings', to: '/profile' },
  { name: 'Log Out', to: '/logout' },
];

const DropdownMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
        <img src={userAvatar} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-transparent hover:border-[#6A5A82] transition-colors" />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
          <ul className="py-1">
            {userLinks.map((link: UserLink, index: number) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;