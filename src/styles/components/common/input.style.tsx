import styled from "styled-components";

interface InputProps {
  width?: string | number;
}

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  border: none;
  border-radius: 8px;
  padding: 0 10px;
`;

export const Input = styled.input<InputProps>`
  width: ${(props) => `${props.width}px`};
  height: 40px;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: transparent;
  font-weight: 500;
  &::placeholder {
    color: #000;
  }
`;
