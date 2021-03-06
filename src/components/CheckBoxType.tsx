import {
  Flex,
  chakra,
  useCheckbox,
  Text,
  CheckboxProps,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const CheckBoxType = ({ ...props }: CheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      alignItems="center"
      justifyContent="center"
      gridColumnGap={2}
      h="30px"
      borderRadius="40px"
      border="1px solid"
      p="0 0.5rem"
      borderColor="red"
      bg={state.isChecked ? "red" : "transparent"}
      cursor="pointer"
      m="0 0.5rem 0.5rem 0"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />

      {state.isChecked && (
        <Flex {...getCheckboxProps()}>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "1rem", color: "white" }}
          />
        </Flex>
      )}

      <Text
        fontSize="0.8rem"
        color={props.isChecked ? "white" : "font"}
        {...getLabelProps()}
      >
        {props.value}
      </Text>
    </chakra.label>
  );
};
