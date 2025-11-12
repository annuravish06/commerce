import { motion } from "framer-motion";
import ImageBanner from "../ImageBanner/ImageBanner";

const HalfImageBanner = () => {
  return (
    <div className="bg-gradient-to-br from-[#f8f3ff] to-[#f3f8ff] min-h-screen py-10">
      <ImageBanner />

      <div className="relative w-full h-[50vh] overflow-hidden bg-gradient-to-r from-[#f8f3ff] to-[#f3f8ff]">
        {/* Container for half image layout */}
        <div className="container mx-auto h-full flex flex-col md:flex-row">
          {/* Text Content (Left Side) */}
          <motion.div
            className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-12 py-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                New Summer Collection
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Discover our exclusive range of ethnic wear crafted with premium fabrics and traditional craftsmanship.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Content (Right Side) */}
          <motion.div
            className="w-full md:w-1/2 h-full relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image with Parallax Effect */}
            <motion.div
              className="absolute inset-0 bg-[url('/manu-Photoroom.png')] bg-cover bg-center"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Floating Elements */}
            <motion.div
              className="absolute bottom-8 left-8 w-16 h-16 bg-blue-gray-500/30 rounded-full backdrop-blur-sm"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-1/4 right-12 w-24 h-24 bg-pink-500/20 rounded-full backdrop-blur-sm"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Decorative Border */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </div>

  );
};

export default HalfImageBanner;