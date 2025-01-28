import CartListItem from './cart-list-item';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const CartList = () => {
  const { cartItems, amount } = useSelector((store: RootState) => store.cart);
  console.log(amount);
  return (
    <div>
      {amount < 1 ? (
        <div>No items in cart</div>
      ) : (
        cartItems.map((item) => <CartListItem item={item} />)
      )}
    </div>
  );
};

export default CartList;
