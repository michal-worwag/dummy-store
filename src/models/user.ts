import { z } from 'zod';

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  gender: z.string(),
  email: z.string(),
  phone: z.string(),
  username: z.string(),
  password: z.string(),
  address: z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
});

export type User = z.infer<typeof userSchema>;
