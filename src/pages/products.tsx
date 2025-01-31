import Container from '@/layouts/container';
import { useProducts } from '@/hooks/useProducts';
import ProductList from '@/components/ProductList/product-list';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function Products() {
  const [skip, setSkip] = useState(0);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  useEffect(() => {
    const skip = page === '1' ? 0 : Number(page) * 15;
    setSkip(skip);
  }, [page]);

  const { data, isLoading, error } = useProducts({
    limit: 15,
    skip,
    select: 'title,id,price,category,stock,thumbnail,images',
  });
  return (
    <Container>
      <h1 className='text-2xl font-bold mb-8 mt-10'>Products</h1>
      <div className='flex flex-col gap-8 py-8'>
        {error ? (
          <div>Error fetching products</div>
        ) : (
          <ProductList data={data || null} isLoading={isLoading} />
        )}
      </div>
    </Container>
  );
}
