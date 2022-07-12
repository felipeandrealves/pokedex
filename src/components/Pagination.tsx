import {
  Pagination as ChakraPagination,
  usePagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from "@ajna/pagination";
import { useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";

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
  const variant = useBreakpointValue({ base: "60%", md: "100%" });

  const { setCurrentPage, pagesCount, pages } = usePagination({
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

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonsTotal, setCurrentPage]);

  return (
    <ChakraPagination
      pagesCount={pagesCount}
      currentPage={current}
      onPageChange={chakraPageChange}
    >
      <PaginationContainer
        style={{ zoom: variant }}
        w="100%"
        align="center"
        justify="space-between"
      >
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
