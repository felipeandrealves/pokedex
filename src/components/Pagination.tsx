import {
  Pagination as ChakraPagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { ChakraProvider } from "@chakra-ui/react";

interface IPaginationParams {
  current: number;
  pokemonsTotal: number;
  perPage: number;
  handlePageChange: (page: number) => void;
}

export const Pagination = ({
  current,
  pokemonsTotal,
  perPage,
  handlePageChange,
}: IPaginationParams) => {
  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    limits: {
      outer: 2,
      inner: 2,
    },
    total: pokemonsTotal,
    initialState: { pageSize: perPage, currentPage: current },
  });

  const chakraPageChange = (nextPage: number) => {
    handlePageChange(nextPage);

    setCurrentPage(nextPage);
  };

  return (
    <ChakraPagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={chakraPageChange}
    >
      <PaginationContainer w="100%" align="center" justify="space-between">
        <PaginationPrevious
          bg="light_gray"
          _hover={{ bg: "red", color: "white" }}
        >
          Previous
        </PaginationPrevious>

        <PaginationPageGroup>
          {pages.map((page: number) => (
            <PaginationPage
              key={`pagination_page_${page}`}
              page={page}
              p="0 0.75rem"
              bg="light_gray"
              _current={{ bg: "red", color: "white" }}
            />
          ))}
        </PaginationPageGroup>

        <PaginationNext bg="light_gray" _hover={{ bg: "red", color: "white" }}>
          Next
        </PaginationNext>
      </PaginationContainer>
    </ChakraPagination>
  );
};
