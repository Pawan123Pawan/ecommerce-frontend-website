import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import { AuthProvider } from "./contextapi/auth";
import PrivateRoute from "./components/Routes/Private";
import Dashboard from "./pages/user/Dashboard";
import ForgotPasssword from "./pages/auth/ForgetPassword";
import AdminRoute from "./components/Routes/AdminPrivate/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import { SearchProvider } from "./contextapi/Search";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./contextapi/cart";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/product/:slug" element={<ProductDetails />} />
              <Route path="/category/:slug" element={<CategoryProduct />} />
              <Route path="/search" element={<Search />} />
              <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="user" element={<Dashboard />} />
                <Route path="user/profile" element={<Profile />} />
                <Route path="user/orders" element={<Orders />} />
              </Route>
              <Route path="/dashboard" element={<AdminRoute />}>
                <Route path="admin" element={<AdminDashboard />} />
                <Route
                  path="admin/create-category"
                  element={<CreateCategory />}
                />
                <Route
                  path="admin/create-product"
                  element={<CreateProduct />}
                />
                <Route path="admin/product/:slug" element={<UpdateProduct />} />
                <Route path="admin/products" element={<Products />} />
                <Route path="admin/orders" element={<AdminOrders />} />
                {/* <Route path="admin/users" element={<Users />} /> */}
              </Route>
              <Route path="/categories" element={<Categories />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPasssword />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Pagenotfound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  );
}

export default App;
