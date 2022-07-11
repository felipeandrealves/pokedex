import { Flex, FlexProps, Heading, Img } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

interface IHeaderProps extends FlexProps {}

export const Header = ({ ...props }: IHeaderProps) => {
  return (
    <Flex
      {...props}
      w="100vw"
      h="6rem"
      bg="red"
      align="center"
      justify="center"
      boxShadow="0 .5rem 1rem rgba(0,0,0,.15)"
    >
      <Flex
        w="100%"
        maxW="1024px"
        h="100%"
        align="center"
        justify="space-between"
        padding={["1rem", "2rem"]}
      >
        <Flex align="center">
          <Img alt="Pokeball" src="/pokeball.svg" mr="1rem" />
          <Heading color="white">Pokedéx</Heading>
        </Flex>

        <Flex align="center">
          <Img alt="Synvia" src="/synvia-A.svg" mr="0.5rem" />
          <FontAwesomeIcon icon={faSignOutAlt} color="white" />
        </Flex>
      </Flex>
    </Flex>
  );
};
