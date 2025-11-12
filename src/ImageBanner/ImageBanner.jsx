import React from 'react'
import { motion } from "framer-motion";

function ImageBanner() {
  return (
    <div className="relative mb-14 overflow-hidden rounded-xl shadow-xl">
      {/* Banner Image */}
      <div className="relative h-49 w-full sm:h-64 md:h-80 lg:h-96">
        <img
          src="https://idaho-o.com/cdn/shop/files/Idaho_Banners_3.jpg?v=1744873788"
          alt="Shopping Banner"
          className="h-full w-full object-cover object-center"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-anu-primary/80 to-anu-secondary/60"></div> */}
      </div>

      {/* Banner Content */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl font-playfair mb-4">
            Your Shopping Cart
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
            Review your items and proceed to checkout
          </p>
          <div className="mt-6 h-1 w-24 bg-white mx-auto rounded-full"></div>
        </div>
      </div> */}

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      />
    </div>
  )
}

export default ImageBanner