import React from 'react';
import styled, { css } from 'styled-components';

// import { Container } from './styles';
export interface IAbButton {
  text?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const StyledButton = styled.button<IAbButton>`
  background-color: ${(props: IAbButton) =>
    props.variant === 'primary' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  color: ${(props: IAbButton) =>
    props.variant === 'primary' ? '#fff' : '#eb9b00'};
  border: 2px solid #eb9b00;
  font-size: 25px;
  cursor: pointer;
  outline: none;
  ${(props: IAbButton) =>
    props.variant === 'primary'
      ? css`
          &:hover {
            background-color: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            color: #b87900;
            border: 2px solid #b87900;
          }
        `};
`;

export const AbButton = ({ text, variant = 'primary', onClick }: IAbButton) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {text}
    </StyledButton>
  );
};
