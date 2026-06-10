import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

import { FiChevronRight } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const logo = "/img/logo.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer dark-background bg-gray-900 text-white pt-6 pb-4"
    >
      <div className="container mx-auto px-4">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">

          {/* LOGO */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="logo flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-links flex items-center gap-4">

            <a
              href="https://x.com/MyospazSoftware"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:-translate-y-1 hover:bg-primary transition-all duration-300"
            >
              <FaXTwitter size={16} />
            </a>

            <a
              href="https://www.facebook.com/myospaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:-translate-y-1 hover:bg-primary transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.youtube.com/channel/UCsRTf1GSFiemYHoIBlwIVnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:-translate-y-1 hover:bg-primary transition-all duration-300"
            >
              <FaYoutube size={16} />
            </a>

            <a
              href="https://www.linkedin.com/company/myospaz-software-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:-translate-y-1 hover:bg-primary transition-all duration-300"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a
              href="https://www.instagram.com/myospaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:-translate-y-1 hover:bg-primary transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

          </div>
        </div>

        {/* FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">

          {/* COMPANY */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>

            <ul className="space-y-2">

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/about"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  About us
                </NavLink>
              </li>

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/wearehiring"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  We are hiring
                </NavLink>
              </li>

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/lifeatmyospaz"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Gallery
                </NavLink>
              </li>

            </ul>
          </div>

          {/* SUPPORT */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Support</h4>

            <ul className="space-y-2">

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/internship"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Internship
                </NavLink>
              </li>

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/services/businessservices"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  IT Help Desk
                </NavLink>
              </li>

            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Industries</h4>

            <ul className="space-y-2">

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/industries/healthcare"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Healthcare
                </NavLink>
              </li>

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/industries/education"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Education
                </NavLink>
              </li>

            </ul>
          </div>

          {/* DEVELOPERS */}
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Developers</h4>

            <ul className="space-y-2">

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/services/uiux"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Web Development
                </NavLink>
              </li>

              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink
                  to="/services/seoservices"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  SEO Marketing
                </NavLink>
              </li>

            </ul>
          </div>

          {/* MAP */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Find Us</h3>

            <div className="w-full h-48 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3387107212166!2d73.78707317519039!3d18.468310682615176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958455182c89%3A0xa5a415b04e4292b6!2sMyospaz%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1745408123434!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Myospaz Location"
              ></iframe>

            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="copyright text-center pt-4 border-t border-gray-800">
          <p className="mb-2 text-gray-400">
            © Copyright
            <strong className="px-1 text-white"> MyosPaz </strong>
            All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;