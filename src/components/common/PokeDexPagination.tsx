import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const PokeDexPagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePageClick = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
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
            <PaginationPrevious
              href={`#${currentPage - 1}`}
              onClick={() => handlePageClick(currentPage - 1)}
            />
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
              href={`#${startPage + index}`}
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
            <PaginationNext
              href={`#${currentPage + 1}`}
              onClick={() => handlePageClick(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};