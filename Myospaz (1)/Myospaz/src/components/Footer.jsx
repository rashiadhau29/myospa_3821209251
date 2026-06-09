

import { FiTwitter, FiFacebook, FiYoutube, FiLinkedin, FiChevronRight } from 'react-icons/fi';
import logo from '../../public/img/logo.png'; 
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background bg-gray-900 text-white pt-6 pb-4">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
      
          <div className="mb-6 md:mb-0">
            <Link to="/" className="logo flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </Link>
          </div>
          
          
          <div className="social-links flex gap-6">
            <a href="https://x.com/MyospazSoftware" className="text-gray-400 hover:text-white transition text-xl"><FiTwitter /></a>
            <a href="https://www.facebook.com/myospaz/" className="text-gray-400 hover:text-white transition text-xl"><FiFacebook /></a>
            <a href="https://www.youtube.com/channel/UCsRTf1GSFiemYHoIBlwIVnQ" className="text-gray-400 hover:text-white transition text-xl"><FiYoutube /></a>
            <a href="https://www.linkedin.com/company/myospaz-software-technologies" className="text-gray-400 hover:text-white transition text-xl"><FiLinkedin /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6">
    
       
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/about" className="text-gray-400 hover:text-white transition text-sm">About us</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/wearehiring" className="text-gray-400 hover:text-white transition text-sm">We are hiring</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/lifeatmyospaz" className="text-gray-400 hover:text-white transition text-sm">Gallery</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/useragreement" className="text-gray-400 hover:text-white transition text-sm">User agreement</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/ceodesk" className="text-gray-400 hover:text-white transition text-sm">CEOs Desk</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/contact" className="text-gray-400 hover:text-white transition text-sm">Contact us</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy policy</NavLink>
              </li>
            </ul>
          </div>

    
          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/internship" className="text-gray-400 hover:text-white transition text-sm">Internship</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/businessservices" className="text-gray-400 hover:text-white transition text-sm">IT-Help Desk</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/businessservices" className="text-gray-400 hover:text-white transition text-sm">Technical Support</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/hosting" className="text-gray-400 hover:text-white transition text-sm">Domain & Hosting</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/policies/refund" className="text-gray-400 hover:text-white transition text-sm">Refund policy</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/policies/payment" className="text-gray-400 hover:text-white transition text-sm">Payment Terms</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/sitemap" className="text-gray-400 hover:text-white transition text-sm">Site Map</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Industries</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/healthcare" className="text-gray-400 hover:text-white transition text-sm">Healthcare</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/education" className="text-gray-400 hover:text-white transition text-sm">Education</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/broadband" className="text-gray-400 hover:text-white transition text-sm">Broadband Services</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/tattoo" className="text-gray-400 hover:text-white transition text-sm">Tattoo</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/manufacturing" className="text-gray-400 hover:text-white transition text-sm">Manufacturing</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/travel" className="text-gray-400 hover:text-white transition text-sm">Travel & Transport</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/industries/retail" className="text-gray-400 hover:text-white transition text-sm">Retail</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="text-lg font-bold mb-4 text-white">Developers</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/uiux" className="text-gray-400 hover:text-white transition text-sm">Web Development</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/seoservices" className="text-gray-400 hover:text-white transition text-sm">SEO Marketing</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/applicationservices" className="text-gray-400 hover:text-white transition text-sm">Android Development</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/bulksms" className="text-gray-400 hover:text-white transition text-sm">Bulk SMS</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/emailmarketing" className="text-gray-400 hover:text-white transition text-sm">Email Marketing</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/services/applicationservices" className="text-gray-400 hover:text-white transition text-sm">Desktop Application</NavLink>
              </li>
              <li className="flex items-center">
                <FiChevronRight className="text-primary mr-2 text-xs" />
                <NavLink to="/contentwriting" className="text-gray-400 hover:text-white transition text-sm">Content Writing</NavLink>
              </li>
            </ul>
          </div>


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

        <div className="copyright text-center pt-4 border-t border-gray-800">
          <p className="mb-2 text-gray-400">© <span>Copyright</span> <strong className="px-1 text-white">MyosPaz</strong> <span>All Rights Reserved</span></p>
          {/* <div className="credits text-gray-500 text-sm">
            Designed by <NavLink to="/team/priyanka" className="hover:text-white transition">Priyanka</NavLink>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;