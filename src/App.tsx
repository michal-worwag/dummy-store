import { Route, Routes } from 'react-router';

import Products from './pages/products.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';
import SingleProduct from './pages/single-product.tsx';
import Cart from './pages/cart.tsx';
import Home from './pages/home.tsx';
import MainLayout from './layouts/main-layout.tsx';
import Account from './pages/account.tsx';
import Login from './pages/login.tsx';
import ProtectedRoute from './components/App/protected-route.tsx';
import { useSelector } from 'react-redux';
import { RootState } from './store.ts';

const App = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />}>
          <Route path='products/:productId' element={<SingleProduct />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
        <Route
          path='account'
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirectPath='/login'
            >
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
