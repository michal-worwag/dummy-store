import { Skeleton } from '../ui/skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-48 w-full rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
