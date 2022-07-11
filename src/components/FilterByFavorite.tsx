import { Flex, FlexProps, Switch, SwitchProps } from "@chakra-ui/react";

interface IContainerProps extends FlexProps {}

interface IFilterByFavorite extends SwitchProps {
  container?: IContainerProps;
}

export const FilterByFavorite = ({
  container,
  ...props
}: IFilterByFavorite) => {
  return (
    <Flex {...container}>
      <Switch id="favoriteFilter" colorScheme="redScheme" {...props} />
    </Flex>
  );
};
