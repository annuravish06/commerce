/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../Firebase/Firebase";
import Loader from "../../Loader/Loader";
import { motion } from "framer-motion";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // User Signup State 
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  });

  /**========================================================================
   *                          User Login Function 
  *========================================================================**/

  const userLoginFunction = async () => {
    // validation 
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required")
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDB, "user"),
          where('uid', '==', users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => user = doc.data());
          localStorage.setItem("users", JSON.stringify(user))
          setUserLogin({
            email: "",
            password: ""
          })
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate('/user-dashboard');
          } else {
            navigate('/admin-dashboard');
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-anu-light dark:bg-gray-900 p-4">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      {/* Login Form Container */}
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
            Welcome Back
          </h2>
          <motion.div
            className="h-1 w-16 bg-anu-primary mx-auto mt-3 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Sign in to access your account
          </p>
        </motion.div>

        {/* Form Inputs */}
        <div className="space-y-5">
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-anu-dark dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={userLogin.email}
              onChange={(e) => setUserLogin({ ...userLogin, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-anu-dark dark:text-gray-300">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-anu-accent hover:text-anu-primary dark:hover:text-anu-secondary transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={userLogin.password}
              onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-anu-primary/30 focus:border-anu-primary focus:ring-2 focus:ring-anu-primary/20 bg-white/50 dark:bg-gray-700/50 dark:border-gray-600 dark:text-white placeholder-anu-primary/50 dark:placeholder-gray-400 transition-all duration-300"
            />
          </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-2"
          >
            <motion.button
              onClick={userLoginFunction}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 4px 20px -6px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-anu-primary to-anu-accent hover:from-anu-accent hover:to-anu-secondary text-white font-bold rounded-lg shadow-md transition-all duration-300"
            >
              Login
            </motion.button>
          </motion.div>

          {/* Signup Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center pt-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="font-semibold text-anu-primary hover:text-anu-accent dark:hover:text-anu-secondary transition-colors"
              >
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;