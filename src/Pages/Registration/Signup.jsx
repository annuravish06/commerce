
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";
import { motion } from "framer-motion";


const Signup = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // User Signup State 
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  /**========================================================================
   *                          User Signup Function 
  *========================================================================**/

  const userSignupFunction = async () => {
    // validation 
    if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
      toast.error("All Fields are required")
    }

    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
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

      // create user Refrence
      const userRefrence = collection(fireDB, "user")

      // Add User Detail
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: ""
      })

      toast.success("Signup Successfully");

      setLoading(false);
      navigate('/login')
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-anu-light dark:bg-gray-900 p-4">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      {/* Signup Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-gradient-to-br from-anu-light to-white dark:from-gray-800 dark:to-gray-700 border border-anu-primary/20"
      >
        {/* Form Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent">
            Create Account
          </h2>
          <motion.div
            className="h-1 w-16 bg-anu-primary mx-auto mt-3 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Join us to get started
          </p>
        </motion.div>

        {/* Form Inputs */}
        <div className="space-y-5">
          {/* Name Input */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-anu-dark dark:text-gray-300 mb-1">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="John Doe"
                value={userSignup.name}
                onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300 pl-10"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-anu-primary/50 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <label className="block text-sm font-medium text-anu-dark dark:text-gray-300 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={userSignup.email}
                onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300 pl-10"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-anu-primary/50 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-anu-dark dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={userSignup.password}
                onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300 pl-10"
              />
              <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-anu-primary/50 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </motion.div>

          {/* Signup Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="pt-2"
          >
            <motion.button
              onClick={userSignupFunction}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 20px -6px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-anu-primary to-anu-accent hover:from-anu-accent hover:to-anu-secondary text-white font-bold rounded-lg shadow-md transition-all duration-300"
            >
              Create Account
            </motion.button>
          </motion.div>

          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-anu-primary hover:text-anu-accent dark:hover:text-anu-secondary transition-colors"
              >
                Log in
              </Link>
            </p>
          </motion.div>

          {/* Social Login Options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="pt-6"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;