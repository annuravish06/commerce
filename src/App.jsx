
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from './Createpages/Home/Home'
import Nopages from './Createpages/Nopages/Nopages'
import Productinfo from './Productinfo/Product'
import ScrollTop from './Scrolltop/Scrolltop'
import CartPage from './Cart/Cartpage'
import Allproduct from './Allproduct/Allproduct'
import Signup from './Pages/Registration/Signup'
import Login from './Pages/Registration/Login'
import UserDashboard from './Pages/User/UserDashboard'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import AddProductPage from './Pages/Admin/AddProductpage'
import UpdateProductPage from './Pages/Admin/UpdateProductPage'
import MyState from './Context/MyState'
import { Toaster } from 'react-hot-toast'
import { ProtectedRouteForUser } from './ProtectedRoute/ProtectedRouteForUser'
import { ProtectedRouteForAdmin } from './ProtectedRoute/ProtectedRouteForAdmin'
import CategoryPage from './Pages/Category/CategoryPage'




const App = () => {

  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/*' element={<Nopages />} />
          <Route path='/productinfo/:id' element={<Productinfo />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/allproduct' element={<Allproduct />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category/:categoryname' element={<CategoryPage />} />
          <Route path='/user-dashboard' element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path='/admin-dashboard' element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct/:id' element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />

        </Routes>
        <Toaster />
      </Router>
    </MyState>
  )
}

export default App
