import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://idaho-o.com/cdn/shop/files/Idaho_Banners_2_0d642e65-d14a-4e40-93af-caa8a4586cc2.jpg?v=1742381666&width=1000%201000w')] bg-cover mix-blend-overlay" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between px-8">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              New Collection
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover our latest ethnic wear collection blending traditional craftsmanship with contemporary designs
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg mr-4 mb-4 lg:mb-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-white text-purple-600 border border-purple-200 rounded-full font-bold text-lg shadow-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#f3e8ff" }}
              whileTap={{ scale: 0.95 }}
            >
              View Lookbook
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Fashion models */}
        <motion.div
          className="lg:w-1/2 relative h-1/2 lg:h-full mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main model */}
          <motion.div
            className="absolute left-0 bottom-0 w-64 md:w-80 lg:w-96"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://idaho-o.com/cdn/shop/files/IMG_9519_e2d7c343-ad37-4ced-beeb-0c1ec2c73773.jpg?v=1744397216&width=165%20165w"
              alt="Fashion model wearing kurta set"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Secondary model */}
          <motion.div
            className="absolute right-0 bottom-10 w-48 md:w-56 lg:w-64"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <img
              src="https://idaho-o.com/cdn/shop/files/IMG_9545.jpg?v=1744394190&width=165%20165w"

              alt="Fashion model wearing anarkali"
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            className="absolute top-10 right-10 w-8 h-8 rounded-full bg-pink-400/30 backdrop-blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>

      {/* Seasonal badge */}
      <motion.div
        className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold">
          Spring Collection
        </span>
      </motion.div>
    </div>
  );
};

export default Banner;