import {
  CartItem,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeFromCart,
  updateCartItemQuantity,
} from '@/features/cart/cartSlice';
import { Card, CardContent } from '../ui/card';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const CartListItem = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(
    item.quantity?.toString() ?? '1'
  );

  useEffect(() => {
    setInputValue(item.quantity?.toString() ?? '1');
  }, [item.quantity]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue === '') return;

    const numValue = parseInt(newValue);
    if (numValue >= 1) {
      dispatch(updateCartItemQuantity({ id: item.id, quantity: numValue }));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  const calculateItemTotal = () => {
    const total = item.price ? item.price * (item.quantity ?? 1) : 0;
    return Number(total.toFixed(2));
  };

  const handleDecreaseQuantity = (item: CartItem) => {
    dispatch(decreaseCartItemQuantity({ id: item.id }));
  };

  const handleIncreaseQuantity = (item: CartItem) => {
    dispatch(increaseCartItemQuantity({ id: item.id }));
  };

  return (
    <Card>
      <CardContent className='p-6'>
        <div className='flex flex-col sm:flex-row gap-4'>
          <img src={item.thumbnail} alt={item.title} className='w-20 h-20' />
          <div className='flex flex-col gap-2 justify-center'>
            <h2 className='text-sm font-semibold mb-2'>{item.title}</h2>
            <div className='price font-bold'>
              <p>${calculateItemTotal()}</p>
            </div>
          </div>
          <div className='quantity flex flex-row gap-2 items-center ml-auto'>
            <div className='flex flex-row gap-2 items-center'>
              <Button
                variant='outline'
                size='icon'
                onClick={() => handleDecreaseQuantity(item)}
              >
                <MinusIcon />
              </Button>
              <Label htmlFor='quantity' className='sr-only'>
                Quantity
              </Label>
              <Input
                type='number'
                id='quantity'
                value={inputValue}
                min='1'
                max='100'
                onKeyDown={(e) => {
                  if (e.key === '-' || e.key === '+' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                onChange={handleQuantityChange}
                onBlur={() => {
                  if (inputValue === '' || parseInt(inputValue) < 1) {
                    setInputValue('1');
                    dispatch(
                      updateCartItemQuantity({ id: item.id, quantity: 1 })
                    );
                  }
                }}
                className='w-12 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              />
              <Button
                variant='outline'
                size='icon'
                onClick={() => handleIncreaseQuantity(item)}
              >
                <PlusIcon />
              </Button>
            </div>
            <Button variant='ghost' size='icon' onClick={handleRemoveFromCart}>
              <TrashIcon />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartListItem;
