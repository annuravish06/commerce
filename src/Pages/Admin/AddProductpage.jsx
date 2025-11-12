import { useContext, useState } from "react";
import MyContext from "../../Context/MyContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { fireDB } from "../../Firebase/Firebase";
import { Loader } from "lucide-react";

const categoryList = [
  {
    name: 'fashion'
  },
  {
    name: 'shirt'
  },
  {
    name: 'jacket'
  },
  {
    name: 'mobile'
  },
  {
    name: 'laptop'
  },
  {
    name: 'shoes'
  },
  {
    name: 'home'
  },
  {
    name: 'books'
  }
]
const AddProductPage = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addProductFunction = async () => {
    if (product.title == "" || product.price == "" || product.productImageUrl == "" || product.category == "" || product.description == "") {
      return toast.error("all fields are required")
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, 'products');
      await addDoc(productRef, product)
      toast.success("Add product successfully");
      navigate('/admin-dashboard')
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
      toast.error("Add product failed")
    }
  }

  return (
    <div className="bg-anu-light dark:bg-gray-900 min-h-screen flex items-center justify-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      {/* Form Container */}
      <motion.div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-gradient-to-br from-anu-light to-white dark:from-gray-800 dark:to-gray-700 border border-anu-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Form Header */}
        <div className="mb-8 text-center">
          <motion.h2
            className="text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Add New Product
          </motion.h2>
          <motion.div
            className="h-1 w-16 bg-anu-primary mx-auto mt-2 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
          ></motion.div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-5">
          {/* Product Title */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => setProduct({ ...product, title: e.target.value })}
              placeholder="Product Title"
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            />
          </motion.div>

          {/* Product Price */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              placeholder="Product Price"
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            />
          </motion.div>

          {/* Product Image URL */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
              placeholder="Product Image URL"
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            />
          </motion.div>

          {/* Product Category */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
          >
            <select
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white appearance-none"
            >
              <option disabled className="text-anu-primary/50 dark:text-gray-400">Select Product Category</option>
              {categoryList.map((value, index) => (
                <option
                  key={index}
                  value={value.name}
                  className="dark:bg-gray-700"
                >
                  {value.name.charAt(0).toUpperCase() + value.name.slice(1)}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Product Description */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <textarea
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              name="description"
              placeholder="Product Description"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <button
              onClick={addProductFunction}
              type="button"
              className="w-full py-3 px-4 bg-gradient-to-r from-anu-primary to-anu-accent hover:from-anu-accent hover:to-anu-secondary text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Add Product
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AddProductPage;