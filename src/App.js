import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import LoginSignup from './components/Pages/LoginSignup';
import Cart from './components/Pages/Cart';
import Product from './components/Pages/Product'; // ✅ FIXED

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="men" />} />
          <Route path='/womens' element={<ShopCategory category="women" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='/product/:productId' element={<Product />} /> {/* ✅ FIXED */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
