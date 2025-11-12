import { useNavigate } from "react-router";
import Layout from "../Layout/Layout";
import { useContext, useEffect } from "react";
import myContext from "../Context/MyContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../redux/cartSlice";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";


const AllProduct = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { loading, getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    const safeItem = {
      ...item,
      time: item.time?.toDate ? item.time.toDate().toISOString() : item.time, // or just .toDate()
    };

    dispatch(addToCart(safeItem));
    toast.success("Added to cart");
  }

  const deleteCart = (item) => {
    const safeItem = {
      ...item,
      time: item.time?.toDate ? item.time.toDate().toISOString() : item.time,
    };

    dispatch(deleteFromCart(safeItem));
    toast.success("Deleted from cart");
  }

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  return (
    <Layout>
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-[#f8f3ff] via-[#fff0f8] to-[#f3f8ff] min-h-screen py-10">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            All Products
          </h1>
          <p className="text-gray-600">Discover our premium collection</p>
        </motion.div>

        {/* Product Grid */}
        <div className="container px-5 lg:px-0 py-5 mx-auto">
          {loading && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {getAllProduct.map((item, index) => {
              const { id, title, price, productImageUrl } = item;
              const isInCart = cartItems.some((p) => p.id === item.id);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Product Card with subtle border */}
                  <div className="h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100/50">
                    {/* Product Image */}
                    <motion.div
                      className="relative h-80 overflow-hidden"
                      whileHover={{ scale: 1.01 }}
                    >
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="w-full h-full object-cover"
                        src={productImageUrl}
                        alt={title}
                      />
                      {/* Floating brand logo */}
                      <div className="absolute top-2 left-2 transparent p-1 rounded-full shadow-sm">
                        <motion.div
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
                    </motion.div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        {title.substring(0, 25)}
                      </h2>
                      <p className="text-purple-600 font-bold text-lg mb-4">₹{price}</p>

                      {/* Cart Button (unchanged functionality) */}
                      <button
                        onClick={() => isInCart ? deleteCart(item) : addCart(item)}
                        className={`w-full py-2 px-4 rounded-lg font-bold transition-colors ${isInCart
                          ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white'
                          : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                          } hover:opacity-90`}
                      >
                        {isInCart ? "Remove from Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllProduct;