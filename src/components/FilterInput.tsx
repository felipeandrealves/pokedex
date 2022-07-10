/* eslint-disable react/no-children-prop */
import {
  InputGroup,
  Input,
  InputRightElement,
  InputProps,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface IOrderByInputProps extends InputProps {}

export const FilterInput = ({ ...props }: IOrderByInputProps) => {
  return (
    <InputGroup maxW="500px">
      <Input
        {...props}
        borderRadius="2rem"
        bg="light_gray"
        border="none"
        placeholder="Pesquisar por nome ou número"
      />

      <InputRightElement
        color="red"
        children={<FontAwesomeIcon icon={faSearch} />}
      />
    </InputGroup>
  );
};
