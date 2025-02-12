import logo from '../../assets/N1.jpg';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa"; // Phone icon
import { AiOutlineMail } from "react-icons/ai"; // Email icon
import { MdLocationOn } from "react-icons/md"; // Location icon
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <img src={logo} alt="Vigomerge Logo" className="h-10" />
              <span className="text-xl font-bold text-[#1842B6]">
                Vigomerge
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              We are providing services and solutions Pune base company in
              Maharashtra India.
            </p>
            <p className="text-gray-600 mb-4">Follow Us On:</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/vigomerge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="hover:text-[#1842B6] transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com/vigomerge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-[#1842B6] transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/vigomerge/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuLinkedin className="hover:text-[#1842B6] transition duration-300" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-600 hover:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-600 hover:text-black">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-black">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/service/strategic-planning-services" className="text-gray-600 hover:text-black">
                  Strategic Planning Services
                </Link>
              </li>
              <li>
                <Link to="/service/market-research-analysis" className="text-gray-600 hover:text-black">
                  Market Research and Analysis
                </Link>
              </li>
              {/* <li>
                <Link to="/service/financial-consulting" className="text-gray-600 hover:text-black">
                  Financial Consulting
                </Link>
              </li> */}
              <li>
                <Link to="/service/operations-improvement" className="text-gray-600 hover:text-black">
                  Operations Improvement
                </Link>
              </li>
              <li>
                <Link to="/service/organizational-development" className="text-gray-600 hover:text-black">
                  Organizational Development
                </Link>
              </li>
              <li>
                <Link to="/service/change-management" className="text-gray-600 hover:text-black">
                  Change Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center text-gray-600 mb-4">
              <MdLocationOn className="mr-2" /> 
              Baner Pune Maharashtra 411027
            </p>
            <p className="flex items-center text-gray-600 mb-4">
              <FaPhoneAlt className="mr-2" />
              +91 9529782361
            </p>
            <p className="flex items-center text-gray-600 mb-4">
              <AiOutlineMail className="mr-2" />
              info@vigomerge.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-gray-500 pt-6 text-black flex flex-col sm:flex-row justify-between">
          <p>
            Copyright © 2024{" "}
            <Link to="/" className="text-[#1842B6]">
              Vigomerge Technology Pvt Ltd
            </Link>
            . All Rights Reserved.
          </p>
          <Link to="/privacy-policy" className="text-gray-600 hover:text-black">
            Privacy & Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
