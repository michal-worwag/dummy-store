import { CartItem } from '@/features/cart/cartSlice';

const CartListItem = ({ item }: { item: CartItem }) => {
  console.log(item);
  return (
    <div>
      <img src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </div>
  );
};

export default CartListItem;
