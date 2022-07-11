import { useEffect, useMemo, useState } from "react";

type useLocalStorageProps = (
  key: string,
  initialValue?: string[]
) => [string[], (pokemons: string[]) => void];

export const useLocalStorage: useLocalStorageProps = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState<string[]>([]);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);

      return setStoredValue(item ? JSON.parse(item) : initialValue);
    } catch (error) {
      console.log(error);
    }
  }, [initialValue, key]);

  const setLocalStorageValue = (pokemons: string[]) => {
    try {
      setStoredValue(pokemons);

      localStorage.setItem(key, JSON.stringify(pokemons));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setLocalStorageValue];
};
