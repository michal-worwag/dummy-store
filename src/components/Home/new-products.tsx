import { useProducts } from '@/hooks/useProducts';
import Container from '@/layouts/container';
import { Product } from '@/models/product';
import ProductListItem from '../ProductList/produdct-list-item';
import { Button } from '../ui/button';
import AppLink from '../App/app-link';

export default function NewProducts() {
  const { data, isLoading, error } = useProducts({
    limit: 4,
    select: 'title,id,price,category,stock,meta,thumbnail,images',
  });
  return (
    <Container>
      <div className='py-10'>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error fetching products</div>
        ) : (
          <div>
            <h2 className='text-2xl font-bold mb-8 text-center'>
              New Products
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {data?.products.map((product: Product) => (
                <ProductListItem product={product} key={product.id} />
              ))}
            </div>
            <div className='flex justify-center mt-8'>
              <AppLink to='/products'>
                <Button>View All</Button>
              </AppLink>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
