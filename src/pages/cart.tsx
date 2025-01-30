import CartList from '@/components/Cart/cart-list';
import Container from '@/layouts/container';
import CartSummary from '@/components/Cart/cart-summary';

export default function Cart() {
  return (
    <Container>
      <h1 className='text-2xl font-bold mb-8 mt-10'>Cart</h1>
      <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr]  gap-8'>
        <CartList />
        <CartSummary />
      </div>
    </Container>
  );
}
