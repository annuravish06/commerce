import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main-content min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout;