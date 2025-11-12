
import { useNavigate, useParams } from "react-router";
import MyContext from "../../Context/MyContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../Firebase/Firebase";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";
import { motion } from "framer-motion";

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

const UpdateProductPage = () => {
  const context = useContext(MyContext);
  const { loading, setLoading, getAllProductFunction } = context;

  // navigate 
  const navigate = useNavigate();
  const { id } = useParams()
  console.log(id)

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  });

  // Get Single Product Function
  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id))
      //   console.log(product.data())
      const product = productTemp.data();
      setProduct({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date
      })
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const updateProduct = async () => {
    setLoading(true)
    try {

      await setDoc(doc(fireDB, 'products', id), product)
      toast.success("Product Updated successfully")
      getAllProductFunction();
      setLoading(false)
      navigate('/admin-dashboard')

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleProductFunction();
  }, []);
  return (
    <div className="bg-anu-light dark:bg-gray-900 min-h-screen flex items-center justify-center p-4">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      {/* Form Container */}
      <motion.div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-gradient-to-br from-anu-light to-white dark:from-gray-800 dark:to-gray-700 border border-anu-primary/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Form Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className='text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent'>
            Update Product
          </h2>
          <motion.div
            className="h-1 w-16 bg-anu-primary mx-auto mt-3 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Form Inputs with Staggered Animations */}
        <div className="space-y-5">
          {[
            {
              type: "text",
              name: "title",
              value: product.title,
              placeholder: "Product Title",
              onChange: (e) => setProduct({ ...product, title: e.target.value })
            },
            {
              type: "number",
              name: "price",
              value: product.price,
              placeholder: "Product Price",
              onChange: (e) => setProduct({ ...product, price: e.target.value })
            },
            {
              type: "text",
              name: "productImageUrl",
              value: product.productImageUrl,
              placeholder: "Product Image URL",
              onChange: (e) => setProduct({ ...product, productImageUrl: e.target.value })
            }
          ].map((input, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <input
                type={input.type}
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                placeholder={input.placeholder}
                className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
              />
            </motion.div>
          ))}

          {/* Category Select */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <select
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white appearance-none"
            >
              <option disabled className="text-anu-primary/50 dark:text-gray-400">
                Select Product Category
              </option>
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

          {/* Description Textarea */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <textarea
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
              name="description"
              placeholder="Product Description"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            />
          </motion.div>

          {/* Update Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={updateProduct}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 20px -6px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-anu-primary to-anu-accent hover:from-anu-accent hover:to-anu-secondary text-white font-bold rounded-lg shadow-md transition-all duration-300"
            >
              Update Product
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default UpdateProductPage;