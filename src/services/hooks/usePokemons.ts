import { useMemo } from "react";
import axios from "axios";
import useSWR from "swr";

import { Pokemon } from "../../types/Pokemon";

const fetcher = async (path: string) => {
  const { data } = await axios.get(path);

  return data;
};

export const usePokemons = () => {
  const { data, error } = useSWR<{ results: Pokemon[] }>(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json",
    fetcher
  );

  const pokemons = useMemo(() => {
    const dataFetch = data?.results.map((pokemon) => {
      const { name, sprites, type } = pokemon;

      return {
        name,
        sprites,
        type,
      };
    });

    return dataFetch;
  }, [data?.results]);

  return {
    isLoading: !data,
    pokemons,
    error,
  };
};
