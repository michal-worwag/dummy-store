import { Route, Routes } from 'react-router';

import MainLayout from './layouts/main-layout.tsx';

import Home from './pages/home.tsx';
import About from './pages/about.tsx';
import Contact from './pages/contact.tsx';

import Products from './pages/products.tsx';
import SingleProduct from './pages/single-product.tsx';

import Cart from './pages/cart.tsx';

import ProtectedRoute from './components/App/protected-route.tsx';

import Dashboard from './pages/dashboard/dashboard.tsx';
import Login from './pages/login.tsx';
import Orders from './pages/dashboard/orders.tsx';
import OrderDetails from './pages/dashboard/order-details.tsx';
import Profile from './pages/dashboard/profile.tsx';
import Addresses from './pages/dashboard/addresses.tsx';

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
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirectPath='/login'
            />
          }
        >
          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<Orders />} />
            <Route path='orders' element={<Orders />} />
            <Route path='orders/:orderId' element={<OrderDetails />} />
            <Route path='profile' element={<Profile />} />
            <Route path='addresses' element={<Addresses />} />
          </Route>
        </Route>
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
