import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  label {
    color: #002f52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px;
  }

  input {
    font-size: 16px;
    line-height: 24px;
    color: #002f52;
    padding: 8px 24px;
    border: 1px solid #002f52;
    border-radius: 45px;
    &:focus {
      outline: none;
    }
    width: 100%;
    box-sizing: border-box;
  }
`;

export interface IAbTextField {
  id: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'date';
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AbTextField = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}: IAbTextField) => {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputWrapper>
  );
};
