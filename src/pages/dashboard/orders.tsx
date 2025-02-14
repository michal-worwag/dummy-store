import { useOrders } from '@/hooks/useOrders';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import OrdersTable from '@/components/Dashboard/orders-table';

const Orders = () => {
  const { accessToken, id } = useSelector((state: RootState) => state.auth);
  const { data, isLoading, error } = useOrders(
    {
      userId: id,
      limit: 10,
      skip: 0,
      sortBy: 'createdAt',
      order: 'desc',
    },
    accessToken
  );
  console.log(data);
  return (
    <div className='py-8'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && data?.carts.length > 0 ? (
        <OrdersTable data={data.carts} />
      ) : (
        <div>No orders found</div>
      )}
    </div>
  );
};

export default Orders;
