import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section<{ selected: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props =>
    props.selected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#fff'};
  border: 1px solid;
  border-color: ${props => (props.selected ? '#002f52' : '#eb9b00')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${props => (props.selected ? '#fff' : '#eb9b00')};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${props => (props.selected ? '#fff' : '#eb9b00')};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${props =>
      props.selected ? 'rgba(255, 255, 255, 0.64)' : 'rgba(0, 0, 0, 0.54)'};
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface IAbOption {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface IAbOptionsGroup {
  options: IAbOption[];
  defaultSelected?: IAbOption | null;
  onChange?: (option: IAbOption) => void;
}

export const AbOptionsGroup = ({
  options,
  onChange,
  defaultSelected,
}: IAbOptionsGroup) => {
  const [selected, setSelected] = useState<IAbOption | null>(
    defaultSelected ?? null
  );

  const onSelect = (option: IAbOption): void => {
    setSelected(option);

    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      {options.map(option => (
        <StyledSection
          onClick={() => onSelect(option)}
          key={option.id}
          selected={selected?.id === option.id}
        >
          <header>option.title</header>
          <div>
            <strong>{option.body}</strong>
          </div>
          <footer>{option.footer}</footer>
        </StyledSection>
      ))}
    </>
  );
};
