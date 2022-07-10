import { Stack, Text, useCheckboxGroup } from "@chakra-ui/react";
import { CheckBoxType } from "./CheckBoxType";

const types = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighter",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water",
];

export const FilterByType = () => {
  const { value, getCheckboxProps } = useCheckboxGroup({});

  return (
    <>
      {types.map((type) => {
        return (
          <CheckBoxType key={type} {...getCheckboxProps({ value: type })} />
        );
      })}
    </>
  );
};
