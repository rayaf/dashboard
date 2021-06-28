import React from 'react';
import { Container } from "./styles";

interface ISlectInputProps {
  options:{
    value: string | number;
    label: string | number;
  }[],

}

const SelectInput: React.FC<ISlectInputProps> = ({options}) => {
  return (
    <Container>
      <select name="" id="">
        {
          options.map(option =>(
            <option
            key={option.value}
            value={option.value}>
              {option.label}
            </option>
          ))
        }
      </select>
    </Container>
  );
}

export default SelectInput;