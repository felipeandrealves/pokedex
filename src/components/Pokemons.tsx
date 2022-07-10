import { Flex } from "@chakra-ui/react";

import { usePokemons } from "../services/hooks/usePokemons";
import { OrderByInput, FilterInput } from "./";
import { FilterByFavorite } from "./FilterByFavorite";
import { FilterByType } from "./FilterByType";

export const Pokemons = () => {
  const { pokemons } = usePokemons();

  return (
    <Flex w="100vw" justify="center">
      <Flex
        w="100%"
        maxW="1024px"
        padding={["1rem", "3rem 0 0 0"]}
        direction="column"
      >
        <Flex w="100%" wrap="wrap" justify="space-between">
          <FilterInput />

          <OrderByInput containerProps={{ mt: ["1rem", "0"] }} />
        </Flex>

        <Flex w="100%" wrap="wrap" mt="1rem">
          <Flex w="100%" maxW={["300px", "200px"]} direction="column">
            <Flex wrap="wrap">
              <FilterByType />
            </Flex>

            <FilterByFavorite />
          </Flex>

          <Flex
            w="100%"
            maxW={["calc(100% - 300px)", "calc(100% - 200px)"]}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
