'use server';

import instance from '@/axios';
import { AxiosError } from 'axios';
import { z } from 'zod';

const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export async function loginAction(_prevState: unknown, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  try {
    const data = await instance.post('/auth/login', validatedFields.data, {
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      data: data,
      success: true,
      error: null,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        username: validatedFields.data?.username,
        password: validatedFields.data?.password,
        success: false,
        error: error.message,
      };
    }

    if (error instanceof AxiosError) {
      return {
        username: validatedFields.data?.username,
        password: validatedFields.data?.password,
        success: false,
        error: error.response?.data.message,
      };
    }

    return {
      username: validatedFields.data?.username,
      password: validatedFields.data?.password,
      success: false,
      error: 'Something went wrong',
    };
  }
}
