import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 48px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

interface IAbCard {
  children: ReactNode;
}
export const AbCard = ({ children }: IAbCard) => {
  return <StyledCard>{children}</StyledCard>;
};
