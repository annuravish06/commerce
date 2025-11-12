import { motion } from "framer-motion";

const Track = () => {
  const features = [
    {
      title: "Premium T-Shirts",
      description: "Our T-Shirts are 100% made of cotton.",
      icon: (
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
    },
    {
      title: "Stylish Designs",
      description: "Trendy fits for every occasion and season.",
      icon: (
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18M9 3v18M15 3v18"
          />
        </svg>
      ),
    },
    {
      title: "Free Shipping",
      description: "On all orders above ₹499.",
      icon: (
        <svg
          className="w-12 h-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8f3ff] to-[#f3f8ff] py-16">
      <div className="container mx-auto px-5">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our brand special
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Feature Card */}
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  className="p-6 flex justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full shadow-inner">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="px-6 pb-8 text-center">
                  <motion.h3
                    className="text-xl font-bold text-gray-800 mb-3"
                    whileHover={{
                      scale: 1.05,
                      background: "linear-gradient(to right, #8b5cf6, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>

                  {/* Animated Button */}
                  <motion.button
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium shadow-md"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 25px -8px rgba(236, 72, 153, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Track;