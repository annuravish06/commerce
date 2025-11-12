import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import Loader from "../../Loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../Firebase/Firebase";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Edit } from "lucide-react";
import { Trash } from "lucide-react";
import { PackageOpen } from "lucide-react";


const ProductDetail = () => {
  const context = useContext(MyContext);
  const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

  const navigate = useNavigate()
  // console.log(getAllProduct)

  const deletProduct = async (id) => {
    setLoading(true)
    try {

      await deleteDoc(doc(fireDB, 'products', id))
      toast.success('Product Deleted Successfully')
      getAllProductFunction();
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  return (
    <div className="bg-anu-light dark:bg-gray-900 p-6 min-h-screen">
      {/* Header Section */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent">
            Product Inventory
          </h1>
          <div className="h-1 w-16 bg-anu-primary rounded-full mt-2"></div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to={'/addproduct'}>
            <button className="px-6 py-3 bg-gradient-to-r from-anu-primary to-anu-accent text-white rounded-lg shadow-md hover:from-anu-accent hover:to-anu-secondary transition-all duration-300 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add Product
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <Loader />
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-anu-primary/20">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-anu-primary/10 to-anu-accent/10 dark:from-gray-700 dark:to-gray-700">
                {["S.No.", "Image", "Title", "Price", "Category", "Date", "Actions"].map((header, index) => (
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
              {getAllProduct.length > 0 ? (
                getAllProduct.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    className="hover:bg-anu-light/30 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Serial Number */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                      {index + 1}.
                    </td>

                    {/* Product Image */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <img
                          className="h-16 w-16 object-contain rounded-md bg-gray-50 dark:bg-gray-700 p-1"
                          src={item.productImageUrl}
                          alt={item.title}
                          onError={(e) => {
                            e.target.src = '/placeholder-product.png';
                            e.target.className = 'h-16 w-16 object-contain bg-gray-100 dark:bg-gray-600 p-1 rounded-md';
                          }}
                        />
                      </div>
                    </td>

                    {/* Product Title */}
                    <td className="px-6 py-4 text-sm font-medium text-anu-dark dark:text-white max-w-xs truncate">
                      {item.title}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-anu-primary dark:text-anu-accent">
                      ₹{item.price}
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-anu-accent/10 text-anu-accent dark:bg-anu-primary/20 dark:text-anu-primary">
                        {item.category}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                      {new Date(item.date).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                      <motion.button
                        onClick={() => navigate(`/updateproduct/${item.id}`)}
                        className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Edit"
                      >
                        <Edit className="h-5 w-5" />
                      </motion.button>

                      <motion.button
                        onClick={() => deletProduct(item.id)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Delete"
                      >
                        <Trash className="h-5 w-5" />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <PackageOpen className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
                      <h3 className="text-lg font-medium text-anu-dark dark:text-white">No products found</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Get started by adding your first product
                      </p>
                      <Link
                        to="/addproduct"
                        className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-anu-primary to-anu-accent text-white rounded-md shadow-sm hover:from-anu-accent hover:to-anu-secondary transition-all duration-300"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;