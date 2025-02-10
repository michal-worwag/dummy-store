import axiosInstance from '@/axios';
import { loginUser } from '@/features/auth/authSlice';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

type LoginCredentials = {
  username: string;
  password: string;
};

async function login({ username, password }: LoginCredentials) {
  const response = await axiosInstance.post('/auth/login', {
    username,
    password,
  });
  return response.data;
}

export function useLogin() {
  const dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    onSuccess: (data) => {
      dispatch(loginUser(data));
      window.location.href = '/';
    },
  });
  return { mutate, isPending };
}
