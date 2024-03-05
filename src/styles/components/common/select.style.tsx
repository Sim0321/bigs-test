import styled from "styled-components";

interface CustomSelectProps {
  width?: string | number;
}

export const CustomSelect = styled.div<CustomSelectProps>`
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  width: ${(props) => `${props.width}px`};
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  svg {
    position: absolute;
    right: 5px;
  }
`;
