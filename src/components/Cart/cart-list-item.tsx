import {
  CartItem,
  removeFromCart,
  updateCartItemQuantity,
} from '@/features/cart/cartSlice';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useDispatch } from 'react-redux';

const CartListItem = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();
  console.log(item);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1) {
      dispatch(updateCartItemQuantity({ id: item.id, quantity: value }));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  const calculateItemTotal = () => {
    const total = item.price ? item.price * (item.quantity ?? 1) : 0;
    return Number(total.toFixed(2));
  };

  return (
    <Card>
      <CardHeader className='flex flex-row justify-between gap-2'>
        <CardTitle>{item.title}</CardTitle>
        <Button variant='ghost' size='icon' onClick={handleRemoveFromCart}>
          <TrashIcon />
        </Button>
      </CardHeader>
      <CardContent>
        <div className='flex flex-row justify-between gap-2'>
          <div className='price'>
            <p>${calculateItemTotal()}</p>
          </div>
          <div className='quantity flex flex-row gap-2 items-center'>
            <Button variant='outline' size='icon'>
              <MinusIcon />
            </Button>
            <div>
              <Label htmlFor='quantity' className='sr-only'>
                Quantity
              </Label>
              <Input
                type='number'
                id='quantity'
                defaultValue={item.quantity}
                min='1'
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === '+') {
                    e.preventDefault();
                  }
                }}
                onChange={handleQuantityChange}
                className='w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              />
            </div>
            <Button variant='outline' size='icon'>
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartListItem;
