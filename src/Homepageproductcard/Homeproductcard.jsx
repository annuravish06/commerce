import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import myContext from "../Context/MyContext";
import { useContext, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";


const HomePageProductCard = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);

  // console.log(cartItems);

  const dispatch = useDispatch();

  // add to cart function
  const addCart = (item) => {
    const safeItem = {
      ...item,
      time: item.time?.toDate ? item.time.toDate().toISOString() : item.time,
    };
    dispatch(addToCart(safeItem));
    toast.success("Added to cart");
  }


  // delete from cart function
  const deleteCart = (item) => {
    const safeItem = {
      ...item,
      time: item.time?.toDate ? item.time.toDate().toISOString() : item.time,
    };
    dispatch(deleteFromCart(safeItem));
    toast.success("Deleted from cart");
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="mt-10">
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Bestselling Products
        </h1>
        <p className="text-gray-500 mt-2">Discover our most loved items</p>
      </motion.div>

      {/* Product Grid */}
      <div className="container px-5 py-5 mx-auto">
        {loading && (
          <div className="flex justify-center">
            <Loader />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {getAllProduct.slice(0, 8).map((item, index) => {
            const { id, title, price, productImageUrl } = item;
            const isInCart = cartItems.some((p) => p.id === item.id);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
              >
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    onClick={() => navigate(`/productinfo/${id}`)}
                    className="w-full h-full object-cover cursor-pointer"
                    src={productImageUrl}
                    alt={title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Floating Brand Logo */}
                  <motion.div
                    className="absolute top-2 left-2 transparent rounded-full p-1 shadow-md"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      src="/anu-removebg-preview-removebg-preview.png"
                      alt="Logo"
                      className="h-12 w-12 animate-float drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                    {title.substring(0, 25)}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-purple-600">
                      ₹{price}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Cart Button (preserved your exact functionality) */}
                  <button
                    onClick={() => isInCart ? deleteCart(item) : addCart(item)}
                    className={`w-full py-2 px-4 rounded-lg font-bold transition-all ${isInCart
                      ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      } hover:shadow-md`}
                  >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                  </button>
                </div>

                {/* Hover Effect Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-2 py-1 text-xs font-bold transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">
                  Popular
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default HomePageProductCard;














