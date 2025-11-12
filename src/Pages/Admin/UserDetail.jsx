import { useContext } from "react";
import myContext from "../../Context/MyContext";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const UserDetail = () => {
  const context = useContext(myContext);
  const { getAllUser } = context;
  return (
    <div className="bg-anu-light dark:bg-gray-900 p-6 min-h-screen">
      {/* Header Section */}
      <motion.div
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent">
            User Management
          </h1>
          <div className="h-1 w-16 bg-anu-primary rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Table Container */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-anu-primary/20">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-anu-primary/10 to-anu-accent/10 dark:from-gray-700 dark:to-gray-700">
                {["S.No.", "Name", "Email", "UID", "Role", "Join Date"].map((header, index) => (
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
              {getAllUser.length > 0 ? (
                getAllUser.map((user, index) => (
                  <motion.tr
                    key={user.uid}
                    className="hover:bg-anu-light/30 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {/* Serial Number */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                      {index + 1}
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-anu-primary dark:text-anu-accent">
                      {user.name}
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4 text-sm text-anu-dark dark:text-gray-300 hover:text-anu-primary dark:hover:text-anu-accent transition-colors cursor-pointer">
                      {user.email}
                    </td>

                    {/* UID */}
                    <td className="px-6 py-4 text-sm text-anu-dark dark:text-gray-300 font-mono hover:text-anu-primary dark:hover:text-anu-accent transition-colors cursor-pointer">
                      {user.uid.slice(0, 8)}...
                    </td>

                    {/* Role */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${user.role === 'admin'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                        {user.role}
                      </span>
                    </td>

                    {/* Join Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-anu-dark dark:text-gray-300">
                      {new Date(user.date).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
                      <h3 className="text-lg font-medium text-anu-dark dark:text-white">No users found</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        There are currently no registered users
                      </p>
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

export default UserDetail;