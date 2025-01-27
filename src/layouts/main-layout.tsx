import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import { Outlet } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from '@/features/cart/cartSlice';
import { useEffect } from 'react';
import { RootState } from '@/store';

export default function MainLayout() {
  const { cartItems } = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
