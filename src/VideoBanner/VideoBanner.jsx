import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const VideoBanner = () => {
  const videos = [
    "/AQO6OXwbMlGCipkQiC0Vfr2JN42T__EoSizbet__XcqOU5bC8tyB2IuxeMngKmKJ8uPRmvyx_UcxyhSEE0nieQi7o06nlZ28R9gB9SQ.mp4",

    "/AQM1yPOd6aYJIPsH-pxuVOMzkoGAKlMcn2wr2SRA0vFfJqjFui7RaaytzTLfgbDsF2NwFGAgfzAKYHfX-wqBnNQCrPdUaiR6olK9X9I.mp4",
    "/AQNYJsa5oehv-4NGnHOFdHSfZhlSWBzhunvhLbiYkEscpmTTyTZZpkZWUqww67vFsrs_poRNsDZI7l7pHVcf4-tUnmlv3WWCYmR0zwE.mp4"
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  // Auto-rotate videos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videos.length]);

  // Play video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* Video Carousel */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentVideoIndex ? 1 : 0,
              transition: { duration: 1 }
            }}
          >
            <video
              ref={index === currentVideoIndex ? videoRef : null}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-pink-900/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              New Collection 2024
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Discover our latest fashion trends with premium quality fabrics
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-bold text-md shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Video Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentVideoIndex ? 'bg-white w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;








