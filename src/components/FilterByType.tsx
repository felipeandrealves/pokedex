import { Stack, Text, useCheckboxGroup } from "@chakra-ui/react";
import { CheckBoxType } from "./CheckBoxType";

interface IFilterByType {
  onChange: (types: string[]) => void;
}

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

export const FilterByType = ({ onChange }: IFilterByType) => {
  const { getCheckboxProps } = useCheckboxGroup({ onChange });

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
