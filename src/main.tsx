import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Products from './pages/products.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';
import SingleProduct from './pages/single-product.tsx';
import Cart from './pages/cart.tsx';
import Home from './pages/home.tsx';
import MainLayout from './layouts/main-layout.tsx';
import Account from './pages/account.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/dummy-store'>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />}>
            <Route path='/products/:categorySlug' element={<Products />} />
            <Route path='/products/:productId' element={<SingleProduct />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
