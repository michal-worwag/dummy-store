import { useQuery } from '@tanstack/react-query';
import instance from '@/axios';
import { Product } from '@/models/product';

export type PartialProduct = Pick<
  Product,
  'id' | 'title' | 'price' | 'category' | 'stock' | 'meta' | 'thumbnail'
>;

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type GetProductsParams = {
  category?: string;
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: string;
  select?: string;
  delay?: number;
};

async function getProducts(
  params: GetProductsParams
): Promise<ProductsResponse> {
  const { category, limit = 10, skip, sortBy, order, select, delay } = params;
  const url = category ? `/products/category/${category}` : '/products';
  const response = await instance.get(url, {
    params: {
      limit,
      skip,
      sort: sortBy,
      order,
      select,
      delay,
    },
  });
  return response.data;
}

export function useProducts(params: GetProductsParams) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
  });
  return { data, isLoading, error };
}
