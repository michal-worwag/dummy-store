import { Product } from '@/models/product';
import ProductListItem from './produdct-list-item';
import ProductCardSkeleton from '../Skeleton/product-card-skeleton';
import AppPagination from '../App/app-pagination';

interface ProductListProps {
  data: {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  } | null;
  isLoading: boolean;
}

const ProductList = ({ data, isLoading }: ProductListProps) => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data?.products.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
      </div>
      <AppPagination total={data?.total || 0} limit={data?.limit || 0} />
    </div>
  );
};

export default ProductList;
