import { useContext } from "react";
import Layout from "../../Layout/Layout";
import myContext from "../../Context/MyContext";
import Loader from "../../Loader/Loader";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const UserDashboard = () => {
  // user
  const user = JSON.parse(localStorage.getItem('users'));

  const context = useContext(myContext);
  const { loading, getAllOrder } = context
  // console.log(getAllOrder)

  // console.log(user)
  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8">
        {/* User Profile Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-anu-light to-white dark:from-gray-800 dark:to-gray-700 py-8 rounded-2xl shadow-md border border-anu-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                  alt="User Profile"
                  className="w-32 h-32 object-contain rounded-full border-4 border-anu-primary/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-anu-accent text-white rounded-full p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </motion.div>

              {/* User Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                {[
                  { label: "Name", value: user?.name },
                  { label: "Email", value: user?.email },
                  { label: "Member Since", value: user?.date },
                  { label: "Role", value: user?.role }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-3 bg-anu-light/50 dark:bg-gray-700 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="font-semibold text-anu-dark dark:text-gray-300">{item.label}: </span>
                    <span className="text-anu-primary dark:text-anu-accent font-medium">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order History Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent mb-6">
            Order History
          </h2>

          {loading && (
            <div className="flex justify-center py-12">
              <Loader />
            </div>
          )}

          {getAllOrder.filter((obj) => obj.userid === user?.uid).length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-anu-primary/10 text-center"
            >
              <ShoppingBag className="h-12 w-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-anu-dark dark:text-white">No orders yet</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Your order history will appear here once you make purchases
              </p>
              <Link
                to="/products"
                className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-anu-primary to-anu-accent text-white rounded-lg shadow-md hover:from-anu-accent hover:to-anu-secondary transition-all duration-300"
              >
                Browse Products
              </Link>
            </motion.div>
          ) : (
            getAllOrder.filter((obj) => obj.userid === user?.uid).map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="mb-8"
              >
                {order.cartItems.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    whileHover={{ y: -5 }}
                    className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-anu-primary/10 bg-white dark:bg-gray-800 md:flex-row"
                  >
                    {/* Order Summary */}
                    <div className="w-full border-b border-anu-primary/10 bg-anu-light/30 dark:bg-gray-700/50 md:w-1/3 md:border-b-0 md:border-r">
                      <div className="p-6">
                        <div className="space-y-4">
                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-anu-primary dark:text-anu-accent">
                              Order ID
                            </div>
                            <div className="text-sm font-medium text-anu-dark dark:text-gray-300 font-mono">
                              #{item.id.slice(0, 8)}...
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-anu-primary dark:text-anu-accent">
                              Date
                            </div>
                            <div className="text-sm font-medium text-anu-dark dark:text-gray-300">
                              {new Date(item.date).toLocaleDateString()}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-anu-primary dark:text-anu-accent">
                              Total Amount
                            </div>
                            <div className="text-lg font-bold text-anu-primary dark:text-anu-accent">
                              ₹{item.price * item.quantity}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-semibold uppercase tracking-wider text-anu-primary dark:text-anu-accent">
                              Status
                            </div>
                            <div className={`text-sm font-medium ${order.status === 'pending'
                              ? 'text-red-500 dark:text-red-400'
                              : 'text-green-500 dark:text-green-400'
                              }`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="flex-1">
                      <div className="p-6">
                        <div className="flex flex-col space-y-6">
                          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex-shrink-0">
                              <img
                                className="h-24 w-24 rounded-lg border border-anu-primary/10 object-contain bg-white p-2"
                                src={item.productImageUrl}
                                alt={item.title}
                                onError={(e) => {
                                  e.target.src = '/placeholder-product.png';
                                  e.target.className = 'h-24 w-24 rounded-lg border border-anu-primary/10 object-contain bg-gray-100 p-2 dark:bg-gray-600';
                                }}
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-anu-dark dark:text-white truncate">
                                {item.title}
                              </h3>
                              <p className="text-sm text-anu-primary dark:text-anu-accent mb-2">
                                {item.category}
                              </p>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  Qty: {item.quantity}
                                </span>
                                <span className="text-sm font-bold text-anu-dark dark:text-white">
                                  ₹{item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </Layout>
  );
}

export default UserDashboard;
