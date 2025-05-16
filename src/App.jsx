import './App.css'
import { Routes, Route } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShoppingCart from "./pages/ShoppingCart"
import CheckoutPage from './pages/CheckoutPage'
import NotFoundPage from './pages/NotFoundPage'
import AllProductsPage from './pages/AllProductsPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {CartProvider} from './Context/CartContext'
function App() {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/category/:categoryId" element={<CategoryPage />}></Route>
        <Route path="/all-products" element={<AllProductsPage />}></Route>
        <Route path="/product-details/:productId" element={<ProductDetailPage />}></Route>
        <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
      <Footer />
      </CartProvider>
    </>
  )
}
export default App