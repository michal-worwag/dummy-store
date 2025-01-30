import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Button } from '../ui/button';

const CartSummary = () => {
  const { total } = useSelector((store: RootState) => store.cart);
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='space-y-2'>
          <div className='flex justify-between font-semibold'>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <Button className='w-full mt-6'>Proceed to Checkout</Button>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
