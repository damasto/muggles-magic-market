import './App.css'
import HomePage from './pages/HomePage'
import ProductDetailPage from "./pages/ProductDetailPage"
import CategoryPage1 from "./pages/CategoryPage"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product-detail/:productId" element={ <ProductDetailPage />}></Route>
      <Route path="/category/:category" element={<CategoryPage1/>}></Route>
      

    </Routes>
    </>
  )
}

export default App
