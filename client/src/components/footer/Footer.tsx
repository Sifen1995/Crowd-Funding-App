import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import faGooglePlus from '@fortawesome/free-brands-svg-icons/faGooglePlus';
import faWhatsapp from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import faBlog from '@fortawesome/free-solid-svg-icons/faBlog';
import logo from '../../assets/images/logo.png'; // Replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#1a1c2a] text-gray-300 py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-16 pb-8 border-b border-gray-700">
          {/* Fempower section */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Fempower Logo" className="h-10 mb-2" />
            <p className="text-sm">Fueling women's dreams</p>
          </div>

          {/* About Us section */}
          <div className="flex flex-col md:flex-row md:justify-around gap-8 md:gap-4 lg:gap-16">
            <div>
              <h4 className="text-white font-semibold mb-3">ABOUT US</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fundraising Ideas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 invisible md:visible">.</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>

          {/* Follow Us section */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-white font-semibold mb-3">FOLLOW US</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebookF} />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGooglePlus} />
                <span>Google+</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span>Linkedin</span>
              </a>
              <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>Whatsapp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="text-center text-sm pt-4">
          <p>Copyright © Fundly 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;