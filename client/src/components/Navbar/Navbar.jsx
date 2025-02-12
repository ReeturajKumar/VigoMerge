import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
// import logo from '../../assets/N1.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown
  const location = useLocation(); // This will give us the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define your menu items and paths
  const menuItem = [
    { name: "Product", path: "/product" },
    { name: "Services", path: "/service" },
    { name: "Solutions", path: "/solutions" },
    { name: "Resources", path: "", hasDropdown: true, dropdownItems: [
      { name: "Developers", path: "" },
      { name: "Community", path: "" },
      { name: "Events", path: "" },
      { name: "Blogs", path: "" },
      { name: "Privacy & Policy", path: "" },
    ] },
    { name: "Industry", path: "", hasDropdown: true, dropdownItems: [
      { name: "IT Industry", path: "" },
      { name: "Healthcare", path: "" },
      { name: "Manufacturing", path: "" },
      { name: "E-Commerce", path: "" },
      { name: "Real Estate", path: "" },
    ] },
    { name: "Blog", path: "/blog" },
  ];

  // Function to determine if a menu item is active based on the current route
  const isActive = (path) => location.pathname === path;

  // Handle dropdown visibility
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 w-full left-0 right-0 bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="nav-container flex items-center">
            <Link to="/" className="nav-link flex items-center">
              {/* <img src={logo} alt="Vigomerge Logo" className="h-10 mr-1" /> */}
              <span className="text-[#2D2CB8] font-bold text-3xl">Vigomerge</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItem.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={item.path}
                  className={`px-2 rounded-sm font-medium ${
                    isActive(item.path)
                      ? "text-[#2D2CB8] font-bold" // Active link style
                      : "text-black hover:text-[#2D2CB8]" // Non-active link style
                  }`}
                  onMouseEnter={() => item.hasDropdown && toggleDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && toggleDropdown(null)}
                >
                  {item.name}
                </Link>

                {/* Dropdown for Resources and Industry */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] border rounded-lg shadow-lg">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact-us"
              className="border px-4 py-2 border-[#1842B6] bg-[#1842B6] hover:bg-[#1842B6] rounded-md transition-all duration-300 font-medium text-white"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black-900">
              {isOpen ? (
                <HiOutlineMenuAlt2 className="size-10" />
              ) : (
                <HiOutlineMenuAlt3 className="size-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-3 sm:px-3">
            {menuItem.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.path}
                  onClick={toggleMenu} // Close menu after click
                  className={`block px-4 py-2 ${
                    isActive(item.path)
                      ? "text-[#2D2CB8]" // Active link style in mobile
                      : "text-black hover:text-[#2D2CB8]" // Non-active link style in mobile
                  }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown for Resources and Industry in Mobile */}
                {item.hasDropdown && (
                  <button
                    className="block text-left w-full px-4 py-2"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name} {activeDropdown === item.name ? "-" : "+"}
                  </button>
                )}

                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="ml-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact-us"
              className="block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
