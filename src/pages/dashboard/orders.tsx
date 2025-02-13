import { useOrders } from '@/hooks/useOrders';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

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
      <h1 className='text-2xl font-bold'>Orders</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='bg-white p-4 rounded-lg'>
          <h2 className='text-lg font-bold'>Order 1</h2>
        </div>
      </div>
    </div>
  );
};

export default Orders;
