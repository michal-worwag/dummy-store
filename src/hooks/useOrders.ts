import axiosInstance from '@/axios';
import { Order } from '@/models/order';
import { useQuery } from '@tanstack/react-query';

type OrderResponse = {
  carts: Order[];
  total: number;
  skip: number;
  limit: number;
};

type GetOrdersParams = {
  userId: string;
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: string;
};

async function getOrders(
  params: GetOrdersParams,
  accessToken: string
): Promise<OrderResponse> {
  const {
    userId,
    limit = 10,
    skip = 0,
    sortBy = 'createdAt',
    order = 'desc',
  } = params;
  const response = await axiosInstance.get(`/users/${userId}/carts`, {
    params: {
      limit,
      skip,
      sortBy,
      order,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export function useOrders(params: GetOrdersParams, accessToken: string) {
  return useQuery({
    queryKey: ['orders', params],
    queryFn: () => getOrders(params, accessToken),
  });
}
