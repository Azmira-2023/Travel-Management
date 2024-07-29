import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='pt-20 text-white py-12'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-sm">Your company or project description goes here.</p>
          </div>

          {/* Pages Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Pages</h2>
            <ul className="text-sm">
              <li><Link to="/" className="text-white hover:text-gray-400">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-400">
              All Tourist Spots</Link></li>
              <li><Link to="/services" className="text-white hover:text-gray-400">Add Tourist Spot</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-400">My List
              </Link></li>
            </ul>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-2">Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebook className="h-6 w-6 fill-current" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter className="h-6 w-6 fill-current" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram className="h-6 w-6 fill-current" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
