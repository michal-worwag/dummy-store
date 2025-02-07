import instance from '@/axios';
import { useMutation } from '@tanstack/react-query';

type LoginCredentials = {
  email: string;
  password: string;
};

async function login({ email, password }: LoginCredentials) {
  const response = await instance.post('/auth/login', {
    email,
    password,
  });
  return response.data;
}

export function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
  });
  return { mutate, isPending };
}
