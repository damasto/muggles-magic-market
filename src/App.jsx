import './App.css'
import { Routes, Route } from 'react-router-dom'

import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import  ShoppingCart  from "./pages/ShoppingCart"
import CheckoutPage from './pages/CheckoutPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/category" element={<CategoryPage />}></Route>
      <Route path="/product-detail/:productId" element={<ProductDetailPage />}></Route>
      <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
      <Route path="/checkout" element={<CheckoutPage />}></Route>
    </Routes>
    </>
  )
}

export default App
