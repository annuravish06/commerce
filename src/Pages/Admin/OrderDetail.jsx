import React from "react";
import { useContext } from "react";
import myContext from "../../Context/MyContext";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Trash } from "lucide-react";

const OrderDetail = () => {
  const context = useContext(myContext);
  const { getAllOrder, orderDelete } = context;
  //console.log(getAllOrder)
  return (
    <div className="bg-anu-light dark:bg-gray-900 p-6">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent">
          Order Management
        </h1>
        <div className="h-1 w-20 bg-anu-primary rounded-full mt-2"></div>
      </motion.div>

      {/* Table Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-anu-primary/20">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-anu-primary/10 to-anu-accent/10 dark:from-gray-700 dark:to-gray-700">
                {[
                  "S.No.", "Order ID", "Image", "Title", "Category",
                  "Price", "Qty", "Total", "Status", "Customer",
                  "Address", "Pincode", "Phone", "Email", "Date", "Action"
                ].map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 text-left text-sm font-bold text-anu-dark dark:text-white uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-anu-primary/10 dark:divide-gray-700">
              {getAllOrder.map((order, orderIndex) => (
                <React.Fragment key={order.id}>
                  {order.cartItems.map((item, itemIndex) => (
                    <motion.tr
                      key={item.id}
                      className="hover:bg-anu-light/30 dark:hover:bg-gray-700/50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                    >
                      {/* Serial Number */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        {orderIndex + 1}.{itemIndex + 1}
                      </td>

                      {/* Order ID */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-anu-primary dark:text-anu-accent">
                        {order.id.slice(0, 8)}...
                      </td>

                      {/* Product Image */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={item.productImageUrl}
                            alt={item.title}
                            onError={(e) => {
                              e.target.src = '/placeholder-product.png';
                              e.target.className = 'h-10 w-10 rounded-md object-contain bg-gray-100 p-1 dark:bg-gray-600';
                            }}
                          />
                        </div>
                      </td>

                      {/* Product Title */}
                      <td className="px-6 py-4 text-sm text-anu-dark dark:text-gray-300">
                        {item.title}
                      </td>

                      {/* Category */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-anu-accent/10 text-anu-accent dark:bg-anu-primary/20 dark:text-anu-primary">
                          {item.category}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        ₹{item.price}
                      </td>

                      {/* Quantity */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        {item.quantity}
                      </td>

                      {/* Total Price */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-anu-primary dark:text-anu-accent">
                        ₹{item.price * item.quantity}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : order.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                          {order.status}
                        </span>
                      </td>

                      {/* Customer Name */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        {order.addressInfo.name}
                      </td>

                      {/* Address */}
                      <td className="px-6 py-4 text-sm text-anu-dark dark:text-gray-300 max-w-xs truncate">
                        {order.addressInfo.address}
                      </td>

                      {/* Pincode */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        {order.addressInfo.pincode}
                      </td>

                      {/* Phone */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        {order.addressInfo.mobileNumber}
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4 text-sm text-anu-primary dark:text-anu-accent truncate max-w-xs">
                        {order.email}
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                        {new Date(order.date).toLocaleDateString()}
                      </td>

                      {/* Action */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <motion.button
                          onClick={() => orderDelete(order.id)}
                          className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash className="h-5 w-5" />
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {getAllOrder.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
            <h3 className="mt-2 text-lg font-medium text-anu-dark dark:text-white">No orders found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by processing new orders.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;