import axiosInstance from '@/axios';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/models/user';

async function getUser(id: string, accessToken: string): Promise<User> {
  const response = await axiosInstance.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export function useUser(id: string, accessToken: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id, accessToken),
  });
  return { data, isLoading, error };
}
