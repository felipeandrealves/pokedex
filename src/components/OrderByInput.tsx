import {
  Flex,
  FlexProps,
  Heading,
  Select,
  SelectProps,
} from "@chakra-ui/react";

interface IContainerProps extends FlexProps {}

interface IOrderByInputProps extends SelectProps {
  containerProps?: IContainerProps;
}

export const OrderByInput = ({
  containerProps,
  ...props
}: IOrderByInputProps) => {
  return (
    <Flex
      align="center"
      w={["100%", "auto"]}
      justify="center"
      {...containerProps}
    >
      <Heading fontSize="1rem" mr="1rem">
        Ordenar Por
      </Heading>

      <Select maxW="200px" {...props}>
        <option value="national_number:asc">Menor número</option>
        <option value="national_number:desc">Maior número</option>

        <option value="name:asc">Ordem alfabética</option>
        <option value="name:desc">Ordem alfabética-invertida</option>
      </Select>
    </Flex>
  );
};
