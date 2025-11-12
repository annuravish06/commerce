import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    image: "/Beige Orange Brown Modern Simple Minimalist Instagram Portrait Post Autumn Fall Leaves Cup Book Candle Inspiration Instagram Post (1).png",
    path: "/allproduct",
    title: "Traditional Wear",
    description: "Timeless elegance with handcrafted details"
  },
  {
    image: "/Beige Orange Brown Modern Simple Minimalist Instagram Portrait Post Autumn Fall Leaves Cup Book Candle Inspiration Instagram Post (2).png",
    path: "/allproduct",
    title: "Modern Styles",
    description: "Contemporary designs for the fashion-forward"
  },
  {
    image: "/Beige Orange Brown Modern Simple Minimalist Instagram Portrait Post Autumn Fall Leaves Cup Book Candle Inspiration Instagram Post (3).png",
    path: "/allproduct",
    title: "Bridal Collection",
    description: "Exquisite pieces for your special day"
  },
];

const CategoryCard = ({ image, path, title, description, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(path)}
      className="cursor-pointer w-full sm:w-1/3 p-4 lg:p-6 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        damping: 15,
        stiffness: 100
      }}
    >
      <div className="relative h-[28rem] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-anu-light to-white dark:from-gray-700 dark:to-gray-800 shadow-xl transition-all duration-500 group-hover:shadow-2xl">
        {/* Image container with floating effect */}
        <motion.div
          className="absolute inset-0 flex items-end justify-center p-6"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={image}
            alt={title}
            className="h-[27rem] w-auto object-contain mx-auto transition-all duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = '/placeholder-fashion.png';
              e.target.className = 'h-[20rem] w-auto object-contain mx-auto bg-gray-100 dark:bg-gray-600 p-4 rounded-lg';
            }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <motion.h3
            className="text-3xl font-bold text-white mb-2 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-200 mb-6 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            {description}
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-anu-primary to-anu-accent text-white rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:from-anu-accent hover:to-anu-secondary transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px -8px rgba(139, 92, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            Explore Collection
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const HomeCardNext = () => {

  return (
    <div className="bg-anu-light dark:bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Animated heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-sm font-semibold tracking-wider text-anu-accent uppercase mb-4"
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
          >
            Our Collections
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair"
            style={{
              background: "linear-gradient(to right, #8B5CF6, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Discover Your Style
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-anu-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </motion.div>

        {/* Category cards */}
        <div className="flex flex-wrap -m-4 justify-center">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              {...cat}
              index={idx}
            />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >

          <motion.button
            className="px-10 py-4 border-2 border-anu-primary text-anu-primary rounded-full text-lg font-bold hover:bg-anu-primary hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}

          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeCardNext;