import { useSearchParams } from 'react-router';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

const AppPagination = ({ total, limit }: { total: number; limit: number }) => {
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') || 1;
  const totalPages = Math.ceil(total / limit);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            to={`/products?page=${Number(currentPage) - 1}`}
            isActive={Number(currentPage) <= 1}
          />
        </PaginationItem>
        <PaginationItem>
          {Number(currentPage)}/{totalPages}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            to={`/products?page=${Number(currentPage) + 1}`}
            isActive={Number(currentPage) >= totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;
