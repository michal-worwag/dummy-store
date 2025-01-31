import { useSearchParams } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

const AppPagination = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={`/products?page=${Number(page) - 1}`} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink to={`/products?page=${Number(page) + 1}`}>
            {Number(page) + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext to={`/products?page=${Number(page) + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;
