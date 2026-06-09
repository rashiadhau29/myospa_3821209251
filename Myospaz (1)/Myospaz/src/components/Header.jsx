import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu as BiList,
  FiChevronDown as BiChevronDown,
} from "react-icons/fi";
// import logo from '../../public/logo.png';
import logo from "../../public/img/logo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import ContactPopup from "./ContactPopup";

const Header = ({ activeTab }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNavClick = () => {
    if (mobileNavOpen) {
      setMobileNavOpen(false);
    }
  };

  return (
    // <header className="header flex items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4">
    <header className="header flex items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2 ">
      <div className="container mx-auto flex items-center justify-between relaive ">
        <Link to="/" className="logo flex items-center">
          {/* <img src={logo} alt="Logo" className="h-16 w-auto" /> */}
          <img src={logo} alt="Logo" className="h-13 w-auto" />
        </Link>

        <div
          className="md:hidden absolute right-2 text-2xl cursor-pointer"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <BiList />      
        </div>

        <nav
          className={`navmenu absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 z-40 ${mobileNavOpen ? "block" : "hidden"} md:block`}
        >
          {/* <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0"> */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0 text-sm">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "hover:text-primary transition"
                }
                onClick={handleNavClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "hover:text-primary transition"
                }
                onClick={handleNavClick}
              >
                About
              </NavLink>
            </li>

            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-primary transition">
                Services
                <BiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
              </div>

              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <ul className="p-2">
                  <li>
                    <NavLink
                      to="/services/applicationservices"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Application Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/productengineering"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Product Engineering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/businessservices"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Business Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/seoservices"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      SEO Marketing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/uiux"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      UI/UX Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/paymentgateway"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={handleNavClick}
                    >
                      Payment Gateway
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "hover:text-primary transition"
                }
                onClick={handleNavClick}
              >
                Products
              </NavLink>
            </li>

            {/* <li>
              <NavLink 
                to="/client" 
                className={({isActive}) => isActive ? 'text-primary font-medium' : 'hover:text-primary transition'}
                onClick={handleNavClick}
              >
                Client
              </NavLink>
            </li> */}

            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-primary transition">
                Career
                <BiChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>

              <ul className="absolute top-full left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <NavLink
                    to="/wearehiring"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Job
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/internship"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Internship
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-primary transition">
                Industries
                <BiChevronDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>

              <ul className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <li>
                  <NavLink
                    to="/industries/manufacturing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Manufacturing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/industries/education"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/industries/healthcare"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Healthcare
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/industries/broadband"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Broadband Service
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/industries/travel"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Travel & Transport
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/industries/retail"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Retail
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/industries/tattoo"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={handleNavClick}
                  >
                    Tattoo
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/lifeatmyospaz"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium"
                    : "hover:text-primary transition"
                }
                onClick={handleNavClick}
              >
                Life At Myospaz
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Social Media + CTA */}
        {/* <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 mr-2">
            <a
              href="https://www.facebook.com/myospaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/MyospazSoftware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/myospaz-software-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsRTf1GSFiemYHoIBlwIVnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        
          <Link
            to="/contact"
            className="cta-btn hidden md:inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
          >
            Get Started
          </Link>
        </div> */}

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 mr-2">
            <a
              href="https://www.facebook.com/myospaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-600 transition-transform transform scale-100 hover:scale-150"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/MyospazSoftware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-black transition-transform transform scale-100 hover:scale-150"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/myospaz-software-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-transform transform scale-100 hover:scale-150"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/channel/UCsRTf1GSFiemYHoIBlwIVnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-600 transition-transform transform scale-100 hover:scale-150"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/myospaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-600 transition-transform transform scale-100 hover:scale-150"
            >
              <FaInstagram />
            </a>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="cta-btn hidden md:inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
          >
            Contact
          </Link>
          {/* <Link
            to="#"
            onClick={() => setIsPopupOpen(true)}
            className="cta-btn hidden md:inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
          >
            Get Started
          </Link> */}

          {/* <ContactPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
