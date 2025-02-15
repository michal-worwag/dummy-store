import axiosInstance from '@/axios';
import { User } from '@/models/user';
import { useMutation } from '@tanstack/react-query';

async function updateUser(
  user: Partial<User>,
  id: string,
  accessToken: string
) {
  const response = await axiosInstance.put(`/users/${id}`, user, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
}

export function useUpdateUser() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({
      user,
      accessToken,
      id,
    }: {
      user: Partial<User>;
      accessToken: string;
      id: string;
    }) => updateUser(user, id, accessToken),
  });
  return { mutate, isPending };
}
