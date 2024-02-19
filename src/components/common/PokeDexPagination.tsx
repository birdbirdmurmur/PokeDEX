import { useDataContext } from '@/context/useContext';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const PokeDexPagination = () => {
  const { currentPage, totalPages, handlePageChange } = useDataContext();

  const handlePageClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    handlePageChange(page);
  };

  const maxDisplayedPages = 5; // max pages to display
  const startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages);

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {/* Previous */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => handlePageClick(currentPage - 1)} />
          </PaginationItem>
        )}
        {/* Ellipsis */}
        {startPage > 1 && totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {/* Page index */}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <PaginationItem key={startPage + index}>
            <PaginationLink
              href="#"
              onClick={() => handlePageClick(startPage + index)}
              isActive={startPage + index === currentPage}
            >
              {startPage + index}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis */}
        {endPage < totalPages && totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {/* Next */}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href="#" onClick={() => handlePageClick(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PokeDexPagination;
