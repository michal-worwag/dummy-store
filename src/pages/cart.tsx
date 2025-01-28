import CartList from '@/components/Cart/cart-list';
import Container from '@/layouts/container';

export default function Cart() {
  return (
    <Container>
      <h1 className='text-2xl font-bold mb-8 mt-10'>Cart</h1>
      <CartList />
    </Container>
  );
}
