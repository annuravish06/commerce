import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Kamal Nayan Upadhyay",
      role: "Senior Product Designer",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60",
      quote: "The product completely transformed our design workflow. The attention to detail and intuitive interface saved us countless hours of work."
    },
    {
      name: "S Mishra",
      role: "UI Developer",
      img: "https://www.devknus.com/img/gawri.png",
      quote: "As a developer, I appreciate how seamlessly this integrates with our stack. The documentation is exceptional and the support team is responsive."
    },
    {
      name: "XYZ",
      role: "CTO",
      img: "https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa",
      quote: "We've seen a 40% increase in team productivity since implementation. The ROI has been phenomenal for our organization."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-anu-light to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Headings with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-anu-primary uppercase rounded-full bg-anu-primary/10 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-anu-primary to-anu-accent bg-clip-text text-transparent">
            Voices of Satisfaction
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear what our <span className="text-anu-accent font-medium">valued clients</span> say about their experience
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((user, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Floating Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-anu-primary to-anu-accent rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500 -z-10"></div>

              {/* Main Card */}
              <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-anu-primary/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-anu-accent/10 rounded-full"></div>

                {/* Quote Icon */}
                <div className="text-anu-primary dark:text-anu-accent mb-6">
                  <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 italic">
                    {user.quote}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={user.img}
                        alt={user.name}
                        className="w-14 h-14 object-cover rounded-full border-2 border-white dark:border-gray-700 shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white dark:border-gray-700"></div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {user.name}
                      </h3>
                      <p className="text-anu-accent dark:text-anu-primary text-sm">
                        {user.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-anu-primary/5 to-anu-accent/5 dark:from-gray-700/50 dark:to-gray-700/30 rounded-2xl p-8 border border-anu-primary/10 dark:border-gray-600"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Rated 4.9/5 by 500+ satisfied customers
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join thousands of happy users who transformed their workflow with our product
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;