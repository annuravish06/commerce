import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { Trash } from 'lucide-react'
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../redux/cartSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { fireDB } from "../Firebase/Firebase"
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
//import { Navigate } from "react-router";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart")
  }

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  // const cartQuantity = cartItems.length;

  const cartItemTotal = cartItems.map(item => item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);

  const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  // user
  const user = JSON.parse(localStorage.getItem('users'))

  // Buy Now Function
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
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

  const buyNowFunction = () => {
    // validation 
    if (addressInfo.name === "" || addressInfo.address === "" || addressInfo.pincode === "" || addressInfo.mobileNumber === "") {
      return toast.error("All Fields are required")
    }

    // Order Info 
    const orderInfo = {
      cartItems,
      addressInfo,
      email: user.email,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }
    try {
      const orderRef = collection(fireDB, 'order');
      addDoc(orderRef, orderInfo);
      setAddressInfo({
        name: "",
        address: "",
        pincode: "",
        mobileNumber: "",
      })
      toast.success("Order Placed Successfull")
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Your Shopping Cart
            </h1>
            <div className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-8 xl:gap-x-12">
            {/* Cart Items Section */}
            <section className="rounded-xl bg-gradient-to-br from-anu-light to-white shadow-lg lg:col-span-8 dark:from-gray-700 dark:to-gray-800">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              {cartItems.length > 0 ? (
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-600">
                  {cartItems.map((item, index) => {
                    const { id, title, price, productImageUrl, quantity, category } = item
                    return (
                      <div key={index} className="group relative p-4 hover:bg-anu-light/50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                        <li className="flex py-4 sm:py-4">
                          <div className="flex-shrink-0 overflow-hidden rounded-lg shadow-md">
                            <img
                              src={productImageUrl}
                              alt={title}
                              className="h-24 w-24 object-cover sm:h-32 sm:w-32"
                              onError={(e) => {
                                e.target.src = '/placeholder-product.png';
                                e.target.className = 'h-24 w-24 object-contain bg-gray-100 p-2 sm:h-32 sm:w-32 dark:bg-gray-600';
                              }}
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                              <div>
                                <div className="flex justify-between">
                                  <h3 className="text-lg font-semibold text-anu-dark dark:text-white">
                                    {title}
                                  </h3>
                                </div>
                                <div className="mt-1">
                                  <span className="inline-flex items-center rounded-full bg-anu-accent/10 px-2.5 py-0.5 text-xs font-medium text-anu-accent dark:bg-anu-primary/20 dark:text-anu-primary">
                                    {category}
                                  </span>
                                </div>
                                <div className="mt-3">
                                  <p className="text-xl font-bold text-anu-primary dark:text-anu-accent">
                                    ₹{price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-md border border-gray-300 dark:border-gray-600">
                            <button
                              onClick={() => handleDecrement(id)}
                              className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="h-8 w-12 border-x text-center text-sm font-medium"
                              value={quantity}
                              readOnly
                            />
                            <button
                              onClick={() => handleIncrement(id)}
                              className="h-8 w-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => deleteCart(item)}
                            className="group flex items-center space-x-1 rounded-full px-3 py-1 text-sm transition-colors hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash size={14} className="text-red-500 group-hover:text-red-600 dark:text-red-400" />
                            <span className="font-medium text-red-500 group-hover:text-red-600 dark:text-red-400">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Your cart is empty</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">Start adding some products to your cart</p>
                  <Link
                    to="/products"
                    className="mt-6 rounded-md bg-anu-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-anu-dark transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </section>

            {/* Order Summary Section */}
            <section className="mt-8 rounded-xl bg-gradient-to-br from-anu-light to-white shadow-lg lg:col-span-4 lg:mt-0 dark:from-gray-700 dark:to-gray-800">
              <div className="p-6">
                <h2 className="text-xl font-bold text-anu-dark dark:text-white border-b pb-4 mb-4 font-playfair">
                  Order Summary
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Subtotal ({cartItemTotal} items)</dt>
                    <dd className="font-medium text-gray-900 dark:text-white">₹{cartTotal}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Shipping</dt>
                    <dd className="font-medium text-green-600 dark:text-green-400">Free</dd>
                  </div>

                  <div className="flex justify-between border-t border-dashed pt-4">
                    <dt className="text-lg font-bold text-anu-dark dark:text-white">Total</dt>
                    <dd className="text-lg font-bold text-anu-primary dark:text-anu-accent">₹{cartTotal}</dd>
                  </div>
                </div>

                <div className="mt-8">
                  {user ? (
                    <BuyNowModal
                      addressInfo={addressInfo}
                      setAddressInfo={setAddressInfo}
                      buyNowFunction={buyNowFunction}
                      className="w-full bg-gradient-to-r from-anu-primary to-anu-accent hover:from-anu-accent hover:to-anu-secondary text-white py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    />
                  ) : (
                    <Link
                      to="/login"
                      className="flex w-full items-center justify-center rounded-md bg-anu-primary py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-anu-dark transition-colors"
                    >
                      Login to Checkout
                    </Link>
                  )}
                </div>

                <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    or{' '}
                    <Link
                      to="/allproduct"
                      className="font-medium text-anu-primary hover:text-anu-dark dark:text-anu-accent dark:hover:text-anu-primary"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CartPage;

