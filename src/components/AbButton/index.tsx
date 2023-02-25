import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

const StyledButton = styled.button`
  background-color: #eb9b00;
  padding: 16px 32px;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background-color: #b87900;
  }
`;

export const AbButton = () => {
  return <StyledButton>Clique aqui</StyledButton>;
};
