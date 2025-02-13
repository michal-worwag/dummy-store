import { z } from 'zod';
import { productSchema } from './product';

export const orderSchema = z.object({
  carts: z.array(
    z.object({
      id: z.number(),
      products: z.array(productSchema),
      total: z.number(),
      discountedTotal: z.number(),
      userId: z.number(),
      totalProducts: z.number(),
      totalQuantity: z.number(),
    })
  ),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type Order = z.infer<typeof orderSchema>;
