import { useMemo, useState } from "react";
import { Flex, Spinner, Text } from "@chakra-ui/react";

import { useLocalStorage } from "../services/hooks/useLocalStorage";
import { usePokemons } from "../services/hooks/usePokemons";
import { FilterByFavorite } from "./FilterByFavorite";
import { FilterByType } from "./FilterByType";
import { OrderByInput } from "./OrderByInput";
import { PokemonCard } from "./PokemonCards";
import { FilterInput } from "./FilterInput";
import { Pagination } from "./Pagination";

export const Pokemons = () => {
  const [storagedPokemons, setFavoritePokemons] = useLocalStorage(
    "favoritePokemonNumber",
    []
  );
  const { pokemons, isLoading } = usePokemons();

  const [orderBy, setOrderBy] = useState("national_number_asc");
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const [typesToFilter, setTypesToFilter] = useState<string[]>([]);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [current, setCurrent] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrent(page);
  };

  const favoritePokemons = useMemo(() => {
    if (!favoriteFilter) return pokemons;

    if (!storagedPokemons.length) return [];

    return pokemons.filter((pokemon) =>
      storagedPokemons.includes(pokemon.national_number)
    );
  }, [favoriteFilter, pokemons, storagedPokemons]);

  const typeFilteredPokemons = useMemo(() => {
    if (typesToFilter.length === 0) return favoritePokemons;

    return favoritePokemons.filter((pokemon) =>
      typesToFilter.every((type) => pokemon.type.includes(type))
    );
  }, [favoritePokemons, typesToFilter]);

  const searchPokemons = useMemo(() => {
    return typeFilteredPokemons.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        pokemon.national_number.includes(search)
    );
  }, [search, typeFilteredPokemons]);

  const orderPokemons = useMemo(() => {
    let pokemonsOrdered = [];

    switch (orderBy) {
      case "national_number_asc":
        pokemonsOrdered = searchPokemons.sort((a, b) =>
          a.national_number > b.national_number ? 1 : -1
        );
        break;

      case "national_number_desc":
        pokemonsOrdered = searchPokemons.sort((a, b) =>
          a.national_number < b.national_number ? 1 : -1
        );
        break;

      case "name_asc":
        pokemonsOrdered = searchPokemons.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        break;

      case "name_desc":
        pokemonsOrdered = searchPokemons.sort((a, b) =>
          a.name < b.name ? 1 : -1
        );
        break;
    }

    return [...pokemonsOrdered];
  }, [orderBy, searchPokemons]);

  const page = useMemo(
    () => orderPokemons?.slice((current - 1) * perPage, current * perPage),
    [current, perPage, orderPokemons]
  );

  const addNewFavorite = (id: string) => {
    const index = storagedPokemons.findIndex((n) => n === id);

    if (index === -1) {
      setFavoritePokemons([...storagedPokemons, id]);
    } else {
      setFavoritePokemons([
        ...storagedPokemons.slice(0, index),
        ...storagedPokemons.slice(index + 1),
      ]);
    }
  };

  return (
    <Flex w="100vw" justify="center">
      <Flex
        w="100%"
        maxW="1024px"
        padding={["1rem", "3rem 2rem"]}
        direction="column"
      >
        <Flex w="100%" wrap="wrap" justify="space-between">
          <FilterInput
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrent(1);
            }}
          />

          <OrderByInput
            onChange={(e) => setOrderBy(e.target.value)}
            containerProps={{ mt: ["1rem", "0"] }}
          />
        </Flex>

        <Flex w="100%" wrap="wrap" mt="1rem" direction={["column", "row"]}>
          <Flex w="100%" maxW={["300px", "200px"]} direction="column">
            <Text fontWeight="bold" mb="0.5rem">
              Filtrar por tipo
            </Text>

            <Flex wrap="wrap">
              <FilterByType onChange={(types) => setTypesToFilter(types)} />
            </Flex>

            <Text fontWeight="bold" mb="0.5rem">
              Filtrar favoritos
            </Text>
            <FilterByFavorite
              onChange={() => setFavoriteFilter(!favoriteFilter)}
            />
          </Flex>

          <Flex
            w="100%"
            wrap="wrap"
            maxW={["100%", "calc(100% - 200px)"]}
            minH="700px"
            p="1rem"
            direction="column"
            justify="space-between"
          >
            <Flex
              minH="400px"
              wrap="wrap"
              align={["center", "flex-start"]}
              justify={["center", "flex-start"]}
            >
              {isLoading ? (
                <Flex w="100%" h="100%" align="center" justify="center">
                  <Spinner color="red" />
                </Flex>
              ) : (
                <>
                  {page.length === 0 ? (
                    <Flex w="100%" h="100%" align="center" justify="center">
                      <Text fontWeight="bold">
                        Nenhum pokemon foi encontrado
                      </Text>
                    </Flex>
                  ) : (
                    <>
                      {page?.map((pokemon) => {
                        return (
                          <PokemonCard
                            container={{
                              onClick: () =>
                                addNewFavorite(pokemon.national_number),
                            }}
                            key={pokemon.national_number}
                            pokemon={pokemon}
                            isFavorite={storagedPokemons.includes(
                              pokemon.national_number
                            )}
                          />
                        );
                      })}
                    </>
                  )}
                </>
              )}
            </Flex>

            <Flex w="100%" mt="2rem">
              <Pagination
                current={current}
                perPage={perPage}
                pokemonsTotal={orderPokemons.length}
                handlePageChange={handlePageChange}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
