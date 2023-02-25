import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  padding: 24px 32px;
  color: #ffffff;
  background: #eb9b00;
  font-weight: 700;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
`;

export interface IAbTag {
  text: string;
}
export const AbTag = ({ text }: IAbTag) => {
  return <StyledTag>{text}</StyledTag>;
};
