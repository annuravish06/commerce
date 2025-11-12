// category 
import { useNavigate } from "react-router-dom";

const category = [
  {
    image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
    name: 'fashion'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
    name: 'shirt'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
    name: 'jacket'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
    name: 'mobile'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
    name: 'laptop'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
    name: 'shoes'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
    name: 'home'
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
    name: 'books'
  }
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="py-12 bg-gradient-to-r from-[#f8f3ff] via-[#fff0f8] to-[#f3f8ff] shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Shop By Category
        </h2>

        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar pb-6">
          <div className="flex space-x-8 px-4 animate-fade-in">
            {category.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 group relative"
                onClick={() => navigate(`/category/${item.name}`)}
              >
                {/* Floating container with layered animations */}
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-purple-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>

                  {/* Main circle */}
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 transition-all duration-500 cursor-pointer border-2 border-white shadow-lg group-hover:shadow-xl transform group-hover:scale-110 flex justify-center items-center relative overflow-hidden">
                    {/* Floating animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-float-delay"></div>

                    {/* Image with bounce effect */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-2/3 h-2/3 object-contain transform group-hover:scale-125 transition-transform duration-300 z-10"
                    />
                  </div>
                </div>

                {/* Category name with gradient text */}
                <h3 className="text-center mt-3 text-sm md:text-base font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-pink-600 transition-all duration-300">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </h3>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-8 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          20% {
            transform: translateY(-5px) scale(1.02);
          }
          40% {
            transform: translateY(3px) scale(0.98);
          }
          60% {
            transform: translateY(-3px) scale(1.01);
          }
          80% {
            transform: translateY(2px) scale(0.99);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out both;
        }
        .animate-float-delay {
          animation: float-delay 6s ease-in-out infinite;
        }
        .group:hover .animate-float-delay {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Category;