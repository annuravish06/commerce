import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Searchbox/Searchbox";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.clear('users');
    navigate("/login");
  };

  const navItems = [
    { to: '/', label: 'Home', show: true },
    { to: '/allproduct', label: 'All Products', show: true },
    { to: '/signup', label: 'Signup', show: !user },
    { to: '/login', label: 'Login', show: !user },
    { to: '/user-dashboard', label: 'User', show: user?.role === 'user' },
    { to: '/admin-dashboard', label: 'Admin', show: user?.role === 'admin' },
    { to: '/cart', label: `Cart (${cartItems?.length || 0})`, show: true }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-anu-gradient-light shadow-lg backdrop-blur-sm bg-opacity-90 border-b border-purple-100/30">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between p-4 px-6">
        {/* Logo with Enhanced Animation */}
        <Link to="/" className="flex items-center gap-2 mb-3 lg:mb-0 group">
          <div className="flex items-center gap-3 cursor-pointer transform transition-all duration-500 hover:-translate-y-0.5">
            {/* 3D Floating Logo with Shadow */}
            <div className="relative">
              <img
                src="/anu-removebg-preview-removebg-preview.png"
                alt="Logo"
                className="h-14 w-14 drop-shadow-xl transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110"
                style={{
                  filter: 'drop-shadow(0 5px 5px rgba(168, 85, 247, 0.3))'
                }}
              />
              <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-md group-hover:blur-lg transition-all duration-500 -z-10"></div>
            </div>

            {/* Text with Custom Font and Enhanced Gradient */}
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              <span className="font-[Poppins] tracking-tighter animate-gradient-shift bg-300%">
                AnuStore
              </span>
              <span className="text-xs font-light text-purple-400 block -mt-1 tracking-widest font-[Montserrat]">
                PREMIUM COLLECTION
              </span>
            </span>
          </div>
        </Link>

        {/* Navigation List with Custom Font */}
        <ul className="flex flex-wrap justify-center lg:justify-start gap-6 font-medium text-purple-800 text-lg">
          {navItems
            .filter(item => item.show)
            .map((item, idx) => (
              <li key={idx} className="group relative transition-all duration-300">
                <Link
                  to={item.to}
                  className="font-[Quicksand] font-semibold tracking-tight transition-all duration-300 hover:text-pink-600 px-1 py-1"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:left-0 group-hover:w-full transition-all duration-500 origin-center"></div>
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-purple-200/50 group-hover:bg-pink-300/30 transition-colors duration-500"></div>
                </Link>
              </li>
            ))}
          {user && (
            <li className="group relative">
              <button
                onClick={logout}
                className="font-[Quicksand] font-semibold text-red-600 hover:text-red-800 transition-colors duration-300 px-1 py-1"
              >
                Logout
                <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:left-0 group-hover:w-full transition-all duration-500 origin-center"></div>
              </button>
            </li>
          )}
        </ul>

        {/* Search Bar with Glow Effect */}
        <div className="mt-4 lg:mt-0 w-full lg:w-auto relative group">
          <SearchBar />
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-shift {
        animation: gradient-shift 6s ease infinite;
      }
      
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Quicksand:wght@500;700&family=Montserrat:wght@300&display=swap');
    `}
      </style>
    </nav>
  );
};

export default Navbar;