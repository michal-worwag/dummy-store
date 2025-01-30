import CartListItem from './cart-list-item';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const CartList = () => {
  const { cartItems, amount } = useSelector((store: RootState) => store.cart);
  return (
    <div className='flex flex-col gap-4'>
      {amount < 1 ? (
        <div>No items in cart</div>
      ) : (
        cartItems.map((item) => <CartListItem item={item} key={item.id} />)
      )}
    </div>
  );
};

export default CartList;
