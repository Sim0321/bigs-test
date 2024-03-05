import styled from "styled-components";

export const Option = styled.div`
  background-color: #fff;
  z-index: 1;
  border: 1px solid #f2f2f2;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 110%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
  .option__item {
    cursor: pointer;
    padding: 8px 5px;
    &:hover {
      background-color: #eee;
    }
  }
`;
