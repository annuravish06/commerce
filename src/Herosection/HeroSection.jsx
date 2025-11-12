import { motion } from "framer-motion";

const HeroSection = () => {
  // Enhanced bubble configuration
  const bubbles = [
    { size: 'w-16 h-16', color: 'bg-purple-600/20', position: 'top-[15%] left-[15%]', duration: 12, delay: 0.2 },
    { size: 'w-24 h-24', color: 'bg-pink-500/20', position: 'bottom-[30%] right-[20%]', duration: 15, delay: 0.8 },
    { size: 'w-12 h-12', color: 'bg-blue-400/25', position: 'top-[25%] right-[18%]', duration: 10, delay: 0.4 },
    { size: 'w-20 h-20', color: 'bg-purple-600/30', position: 'bottom-[20%] left-[25%]', duration: 14, delay: 1.2 },
    { size: 'w-14 h-14', color: 'bg-pink-400/20', position: 'top-[18%] right-[22%]', duration: 11, delay: 0.6 },
    { size: 'w-10 h-10', color: 'bg-indigo-500/20', position: 'bottom-[15%] left-[18%]', duration: 9, delay: 0.3 },
    { size: 'w-12 h-12', color: 'bg-purple-300/30', position: 'top-[22%] right-[28%]', duration: 13, delay: 1.0 },
    { size: 'w-10 h-10', color: 'bg-rose-500/20', position: 'bottom-[18%] right-[15%]', duration: 8, delay: 0.5 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-purple-900/10 via-indigo-900/15 to-blue-900/20">
      {/* Background with parallax and color shift */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <img
          src="/Grey and Soft Purple SImple Watercolor Opening Banner Landscape (1).png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)',
              'linear-gradient(45deg, rgba(139, 92, 246, 0.2) 0%, rgba(244, 114, 182, 0.15) 50%, rgba(99, 102, 241, 0.2) 100%)',
              'linear-gradient(45deg, rgba(124, 58, 237, 0.15) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)'
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Floating bubbles with enhanced motion */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className={`absolute ${bubble.size} ${bubble.color} rounded-full backdrop-blur-sm filter ${bubble.position}`}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -40 * (index % 2 === 0 ? 1 : -1), 0],
            x: [0, 30 * (index % 3 === 0 ? 1 : -1), 0],
            rotate: [0, 15, -15, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay || 0
          }}
        />
      ))}

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-1/3 right-12 w-10 h-10 rounded-full bg-pink-400/30 backdrop-blur-sm filter"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0, 0.6, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-12 w-16 h-16 rounded-full bg-purple-300/25 backdrop-blur-sm filter"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 0.4, 0],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Main content with elegant typography */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 0.77, 0.47, 0.97] }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
          />

          {/* Main title with elegant typography */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="font-playfair font-extrabold bg-gradient-to-r from-purple-100 via-pink-200 to-indigo-200 bg-clip-text text-transparent">
              Welcome to <span className="block mt-2 text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text">AnuStore</span>
            </span>
          </motion.h1>

          {/* Subtitle with elegant animation */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover <span className="font-medium text-pink-200">ethnic elegance</span> inspired by timeless tradition and modern flair.
          </motion.p>

          {/* Animated buttons with hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <motion.button
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-lg shadow-xl hover:shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <span className="relative z-10 font-montserrat tracking-wider">Shop Now</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            <motion.button
              className="px-10 py-4 bg-white/5 text-white border border-white/20 rounded-full font-medium text-lg backdrop-blur-md hover:backdrop-blur-lg transition-all duration-300 group"
              whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <span className="font-montserrat tracking-wider relative z-10">
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  Explore Collections
                </span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Elegant scroll indicator */}
        <motion.div
          className="fixed bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          onClick={() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth'
            });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="flex flex-col items-center justify-center"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.p
              className="text-white/80 mb-2 text-xs font-medium tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Scroll Down
            </motion.p>

            <motion.div
              className="group-hover:scale-110 transition-transform duration-300"
              animate={{
                y: [0, 6, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white/90 group-hover:text-white transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>

            {/* Enhanced decorative pulse circle */}
            <motion.div
              className="absolute -z-10 mt-6 w-12 h-12 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0, 0.3],
                borderWidth: [1, 2, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Custom font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Montserrat:wght@400;500;600&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
          letter-spacing: -0.03em;
        }
        
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}

export default HeroSection;