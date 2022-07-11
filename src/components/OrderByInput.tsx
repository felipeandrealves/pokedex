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

export type OrderOptions =
  | "national_number_asc"
  | "national_number_desc"
  | "name_asc"
  | "name_desc";

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
        <option value="national_number_asc">Menor número</option>
        <option value="national_number_desc">Maior número</option>

        <option value="name_asc">Ordem alfabética</option>
        <option value="name_desc">Ordem alfabética-invertida</option>
      </Select>
    </Flex>
  );
};
