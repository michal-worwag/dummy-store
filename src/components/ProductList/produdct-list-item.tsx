import { PartialProduct } from '@/hooks/useProducts';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { addToCart } from '@/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function ProductListItem({
  product,
}: {
  product: PartialProduct;
}) {
  const { cartItems } = useSelector((store: RootState) => store.cart);
  const dispatch = useDispatch();

  const isInCart = cartItems.some((item) => item.id === product.id);
  return (
    <Card className='overflow-hidden flex flex-col justify-between'>
      <CardContent className='p-0 '>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading='lazy'
          className='w-full h-48 object-cover bg-gray-100'
        />
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-2'>{product.title}</h3>
          <p className='text-gray-600'>${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className='p-4'>
        <Button
          className='w-full'
          onClick={() => dispatch(addToCart(product))}
          disabled={isInCart}
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
