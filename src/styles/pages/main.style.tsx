import styled from "styled-components";
import { theme } from "@/Global/theme";

export const MainWrap = styled.div`
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
  height: calc(100vh - 100px);
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .search__container {
    display: flex;
    justify-content: space-between;

    .search__keyword {
      display: flex;
      gap: 10px;
    }
  }

  .news__list-meta {
    padding: 30px 20px;
    border: 1px solid #f2f2f2;
    display: flex;
    font-size: 1.6rem;
    border-radius: 8px;
    .num {
      max-width: 100px;
      min-width: 100px;
      width: 100%;
    }
    .title {
      max-width: 900px;
      min-width: 500px;
      width: 100%;
    }
    .createdAt {
      max-width: 200px;
      min-width: 150px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }

  .news__list {
    padding: 0 0px 0 21px;
    display: flex;
    flex-direction: column;
    /* gap: 7px; */
    .news {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      /* padding-bottom: 10px; */
      height: 40px;
      border-bottom: 1px solid #f2f2f2;
      transition: ${theme.transition.slow};
      .num {
        max-width: 100px;
        min-width: 100px;
        width: 100%;
      }
      .title {
        max-width: 900px;
        min-width: 500px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .createdAt {
        max-width: 200px;
        min-width: 150px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      &:hover {
        transform: scale(1.015);
        cursor: pointer;
      }
    }
  }
`;
