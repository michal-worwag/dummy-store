import Container from '@/layouts/container';
import { useProducts } from '@/hooks/useProducts';
import ProductList from '@/components/ProductList/product-list';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import ProductSort from '@/components/ProductList/product-sort';
export default function Products() {
  const [skip, setSkip] = useState(0);
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;

  useEffect(() => {
    const skip = page === '1' ? 0 : (Number(page) - 1) * 15;
    setSkip(skip);
    if (page === '1') {
      searchParams.delete('page');
      setSearchParams(searchParams);
    }
  }, [page]);

  const { data, isLoading, error } = useProducts({
    limit: 15,
    skip,
    select: 'title,id,price,category,stock,thumbnail,images',
    sortBy,
    order,
  });

  const handleSort = (value: string) => {
    setSearchParams({
      sortBy: value,
      order:
        value === 'lowest'
          ? 'asc'
          : value === 'highest'
          ? 'desc'
          : value === 'a-z'
          ? 'asc'
          : 'desc',
    });
    if (value === 'default') {
      setSortBy('');
      setOrder('');
      searchParams.delete('sortBy');
      searchParams.delete('order');
      searchParams.delete('page');
      setSearchParams(searchParams);
    } else if (value === 'lowest') {
      setSortBy('price');
      setOrder('asc');
    } else if (value === 'highest') {
      setSortBy('price');
      setOrder('desc');
    } else if (value === 'a-z') {
      setSortBy('title');
      setOrder('asc');
    } else if (value === 'z-a') {
      setSortBy('title');
      setOrder('desc');
    }
  };

  return (
    <Container>
      <h1 className='text-2xl font-bold mb-8 mt-10'>Products</h1>
      <div className='flex flex-col gap-8 py-8'>
        <ProductSort onSort={handleSort} />
        {error ? (
          <div>Error fetching products</div>
        ) : (
          <ProductList data={data || null} isLoading={isLoading} />
        )}
      </div>
    </Container>
  );
}
