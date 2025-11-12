import { useContext, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import MyContext from "../Context/MyContext";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { fireDB } from "../Firebase/Firebase";
// import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const Productinfo = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState('')

  const { id } = useParams()

  const getProductData = async () => {
    setLoading(true)
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id))
      // console.log({...productTemp.data(), id : productTemp.id})
      setProduct({ ...productTemp.data(), id: productTemp.id })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const cartItems = useSelector((state) => state.cart);
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

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins bg-anu-light dark:bg-gray-800">
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="w-12 h-12 border-4 border-anu-primary border-t-anu-accent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex flex-wrap mb-24 -mx-4">
              {/* Product Image Section */}
              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                <div className="sticky top-4 overflow-hidden rounded-xl shadow-lg transparent dark:bg-pink-800 h-fit">
                  <div className="relative aspect-square md:aspect-[3/4] w-full">
                    <img
                      className="w-full h-full object-contain p-4"
                      src={product?.productImageUrl}
                      alt={product?.title}
                      onError={(e) => {
                        e.target.src = '/placeholder-product.png'; // fallback image
                        e.target.className = 'w-full h-full object-contain p-4 bg-gray-100 dark:bg-gray-600';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  {/* Title and Price */}
                  <div className="mb-8">
                    <h2 className="max-w-xl mb-4 text-3xl font-bold leading-tight tracking-tight text-anu-dark md:text-4xl dark:text-white font-playfair">
                      {product?.title}
                    </h2>

                    <div className="flex items-center mb-6">
                      <div className="flex items-center mr-4">
                        {[1, 2, 3, 4].map((star) => (
                          <svg
                            key={star}
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-anu-secondary dark:text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-gray-300 dark:text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">(24 reviews)</span>
                      </div>
                    </div>

                    <p className="text-3xl font-bold text-anu-primary dark:text-anu-accent">
                      ₹{product?.price}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="mb-3 text-xl font-semibold text-anu-dark dark:text-gray-200 font-playfair">
                      Product Description
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {product?.description}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="mb-8">
                    {cartItems.some((p) => p.id === product.id) ? (
                      <button
                        onClick={() => deleteCart(product)}
                        className="w-full px-6 py-4 text-lg font-medium text-white bg-gradient-to-r from-red-500 to-rose-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addCart(product)}
                        className="w-full px-6 py-4 text-lg font-medium text-white bg-gradient-to-r from-anu-primary to-anu-accent rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-anu-accent hover:to-anu-secondary"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>

                  {/* Product Highlights */}
                  <div className="p-6 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
                    <h3 className="mb-4 text-xl font-semibold text-anu-dark dark:text-white font-playfair">
                      Why You'll Love It
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Premium Quality Materials",
                        "Fast Shipping Available",
                        "Easy Returns Policy",
                        "Handcrafted with Care",
                        "Eco-Friendly Packaging"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-anu-accent"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Productinfo;