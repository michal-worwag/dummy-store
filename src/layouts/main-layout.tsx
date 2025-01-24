import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import { Outlet } from 'react-router';

export default function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow container mx-auto px-4'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
