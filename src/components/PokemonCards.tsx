import { Box, Flex, FlexProps, Img, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faHeart as HeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as HeartRegular } from "@fortawesome/free-regular-svg-icons";

import { Pokemon } from "../types/Pokemon";

interface IPokemonCardParams {
  pokemon: Pokemon;
  isFavorite: boolean;
  container?: FlexProps;
}

export const PokemonCard = ({
  isFavorite,
  pokemon,
  container,
}: IPokemonCardParams) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <Flex
      w="145.6px"
      h="250px"
      direction="column"
      justify="space-between"
      cursor="pointer"
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
      pos="relative"
      p="0.25rem"
      {...container}
    >
      <Flex pos="absolute" top="0" right="0">
        {mouseIn && !isFavorite && (
          <FontAwesomeIcon icon={HeartRegular} color="red" />
        )}

        {isFavorite && <FontAwesomeIcon icon={HeartSolid} color="red" />}
      </Flex>

      <Flex
        w="100%"
        h="60%"
        bgImage={pokemon.sprites.large}
        _hover={{ bgImage: pokemon.sprites.animated }}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPos="center"
        align="center"
        justify="center"
      />

      <Text color="light_gray">Nº {pokemon.national_number}</Text>
      <Text color="font" fontWeight="bold">
        {pokemon.name}
      </Text>

      <Flex>
        {pokemon.type.map((type) => {
          return (
            <Flex
              mr="0.5rem"
              borderRadius="4px"
              p="0.25rem 0.5rem"
              key={type}
              bg={type.toLocaleLowerCase()}
              color="white"
            >
              <Text fontSize="0.8rem">{type}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
