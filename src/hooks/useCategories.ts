import axiosInstance from '@/axios';
import { useQuery } from '@tanstack/react-query';

async function getCategories() {
  const response = await axiosInstance.get('/products/category-list');
  return response.data;
}

export function useCategories() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  return { data, isLoading, error };
}
