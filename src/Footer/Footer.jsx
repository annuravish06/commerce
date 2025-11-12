import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative text-gray-800 bg-gradient-to-br from-[#faf5ff] via-[#fff5fb] to-[#f5faff] shadow-inner pt-16 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-100/50 blur-xl"></div>
      <div className="absolute bottom-10 -right-10 w-32 h-32 rounded-full bg-pink-100/50 blur-xl"></div>

      {/* Main content container */}
      <div className="container px-5 py-12 mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          {/* Logo and About - Enhanced with floating animation */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <div className="flex items-center mb-6 group">
              <motion.div
                className="relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="h-14 w-14 mr-3 drop-shadow-lg"
                  src="/anu-removebg-preview-removebg-preview.png"
                  alt="AnuStore Logo"
                />
                <div className="absolute inset-0 rounded-full bg-purple-200/30 blur-md -z-10 group-hover:blur-lg transition-all duration-500"></div>
              </motion.div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent font-playfair tracking-tight">
                AnuStore
              </span>
            </div>
            <p className="text-gray-600 mb-6 font-montserrat leading-relaxed">
              Your premier destination for exquisite fashion that blends tradition with contemporary style.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  name: 'facebook',
                  icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
                  color: 'hover:bg-blue-600'
                },
                {
                  name: 'twitter',
                  icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
                  color: 'hover:bg-blue-400'
                },
                {
                  name: 'instagram',
                  icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
                  color: 'hover:bg-gradient-to-r from-purple-600 to-pink-500'
                },
                {
                  name: 'linkedin',
                  icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
                  color: 'hover:bg-blue-700'
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`text-purple-700 hover:text-white p-2 rounded-full bg-white ${social.color} transition-all duration-300 shadow-sm hover:shadow-lg`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${social.name === 'instagram' ? '#E1306C' : social.name === 'twitter' ? '#1DA1F2' : social.name === 'linkedin' ? '#0077B5' : '#1877F2'}">
              <text x="50%" y="50%" font-family="Arial" font-size="12" text-anchor="middle" dy=".3em">${social.name.charAt(0).toUpperCase()}</text>
            </svg>`
                      )}`;
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Enhanced with hover effects */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-purple-900 mb-6 font-playfair tracking-wide">Explore</h3>
            <nav className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/allproduct', label: 'Collections' },
                { to: '/new-arrivals', label: 'New Arrivals' },
                { to: '/bestsellers', label: 'Bestsellers' },
                { to: '/sale', label: 'Sale' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-600 hover:text-purple-700 transition-colors duration-300 font-montserrat group"
                >
                  <span className="relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r from-purple-500 to-pink-500 before:transition-all before:duration-300 group-hover:before:w-full">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Customer Service - Enhanced with icons */}
          <div className="w-full sm:w-1/2 lg:w-1/5 mb-8 lg:mb-0">
            <h3 className="text-xl font-semibold text-purple-900 mb-6 font-playfair tracking-wide">Support</h3>
            <nav className="space-y-3">
              {[
                { to: '/contact', label: 'Contact Us', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { to: '/faq', label: 'FAQs', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { to: '/shipping', label: 'Shipping Info', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' },
                { to: '/returns', label: 'Returns Policy', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
                { to: '/size-guide', label: 'Size Guide', icon: 'M4 6h16M4 12h16M4 18h16' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-300 font-montserrat group"
                >
                  <svg className="w-4 h-4 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                  <span className="relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r from-purple-500 to-pink-500 before:transition-all before:duration-300 group-hover:before:w-full">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter - Enhanced with floating form */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-xl font-semibold text-purple-900 mb-6 font-playfair tracking-wide">Stay Updated</h3>
            <p className="text-gray-600 mb-6 font-montserrat leading-relaxed">
              Join our newsletter for exclusive offers, styling tips, and 10% off your first order.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-2"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent font-montserrat shadow-sm"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium font-montserrat whitespace-nowrap">
                Subscribe
              </button>
            </motion.div>

            {/* Payment methods with hover effects */}
            {/* Replace the payment methods section with this code */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-purple-900 mb-3 font-montserrat uppercase tracking-wider">We Accept</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Visa', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
                  { name: 'Mastercard', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
                  { name: 'PayPal', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
                  { name: 'Apple Pay', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1024px-Apple_Pay_logo.svg.png' },
                  { name: 'Google Pay', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Google_Pay_Acceptance_Mark.svg/2880px-Google_Pay_Acceptance_Mark.svg.png' }
                ].map((method) => (
                  <div
                    key={method.name}
                    className="bg-white p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 hover:border-purple-200"
                  >
                    <img
                      src={method.icon}
                      alt={method.name}
                      className="h-6 w-auto object-contain"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        e.target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" width="60" height="24">
                <rect width="100%" height="100%" fill="#f8f9fa"/>
                <text x="50%" y="50%" font-family="Arial" font-size="10" text-anchor="middle" dy=".3em" fill="#6c757d">${method.name}</text>
              </svg>`
                        )}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Bar - Enhanced with divider */}
        <div className="border-t border-purple-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-gray-600 text-sm font-montserrat">
              © {new Date().getFullYear()} AnuStore. All rights reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-purple-200"></div>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-600 hover:text-purple-700 text-sm font-montserrat transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-purple-700 text-sm font-montserrat transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-purple-700 text-sm font-montserrat transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-600 font-montserrat">100% Secure Payments</span>
          </div>
        </div>
      </div>

      {/* Custom font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Montserrat:wght@400;500;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;