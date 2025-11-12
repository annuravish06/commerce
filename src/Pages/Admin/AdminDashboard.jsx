
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductDetail from '../Admin/ProductDetail';
import OrderDetail from '../Admin/OrderDetail';
import UserDetail from '../Admin/UserDetail';
import { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { motion } from "framer-motion";


const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  const context = useContext(MyContext);
  const { getAllProduct, getAllOrder, getAllUser } = context;
  return (
    <div className="bg-anu-light dark:bg-gray-900 min-h-screen">
      {/* Top Header with Animated Gradient */}
      <motion.div
        className="px-5 pt-8 pb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-anu-primary/10 to-anu-accent/10 py-6 border border-anu-primary/20 rounded-xl shadow-sm backdrop-blur-sm">
          <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-secondary bg-clip-text text-transparent animate-gradient-x">
            Admin Dashboard
          </h1>
        </div>
      </motion.div>

      <div className="px-5">
        {/* User Profile Card with Float Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 py-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6">
              {/* Image with Shine Effect */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-full p-1 bg-anu-gradient-light dark:bg-gray-700">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="Admin"
                    className="w-32 h-32 object-contain bg-white dark:bg-gray-600 rounded-full animate-shine bg-[length:200%_100%]"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-anu-accent text-white rounded-full p-2 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* User Info with Gradient Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
                {[
                  { label: "Name", value: user?.name },
                  { label: "Email", value: user?.email },
                  { label: "Date", value: user?.date },
                  { label: "Role", value: user?.role }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-3 bg-anu-light/50 dark:bg-gray-700 rounded-lg border border-anu-primary/10 dark:border-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="font-semibold text-anu-dark dark:text-gray-300">{item.label}: </span>
                    <span className="text-anu-primary dark:text-anu-accent font-medium">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Tabs with Gradient Effects */}
        <div className="mb-12">
          <Tabs>
            <TabList className="flex flex-wrap -m-2 justify-center">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="m5 11 4-7" /><path d="m19 11-4-7" /><path d="M2 11h20" /><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
                      <path d="m9 11 1 9" /><path d="M4.5 15.5h15" /><path d="m15 11-1 9" />
                    </svg>
                  ),
                  count: getAllProduct.length,
                  label: "Total Products"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <line x1={10} x2={21} y1={6} y2={6} /><line x1={10} x2={21} y1={12} y2={12} /><line x1={10} x2={21} y1={18} y2={18} />
                      <path d="M4 6h1v4" /><path d="M4 10h2" /><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
                    </svg>
                  ),
                  count: getAllOrder.length,
                  label: "Total Orders"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  count: getAllUser.length,
                  label: "Total Users"
                }
              ].map((stat, index) => (
                <Tab
                  key={index}
                  className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
                >
                  <motion.div
                    className="bg-white dark:bg-gray-800 hover:bg-gradient-to-br from-anu-primary/5 to-anu-accent/5 border border-gray-200 dark:border-gray-700 px-6 py-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-anu-primary dark:text-anu-accent w-14 h-14 mb-4 mx-auto bg-anu-primary/10 dark:bg-anu-accent/10 rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <h2 className="title-font font-medium text-4xl text-anu-primary dark:text-anu-accent mb-2">
                      {stat.count}
                    </h2>
                    <p className="text-anu-dark dark:text-gray-300 font-semibold">
                      {stat.label}
                    </p>
                  </motion.div>
                </Tab>
              ))}
            </TabList>

            <TabPanel className="mt-8">
              <ProductDetail />
            </TabPanel>

            <TabPanel className="mt-8">
              <OrderDetail />
            </TabPanel>

            <TabPanel className="mt-8">
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>


  );
}

export default AdminDashboard;