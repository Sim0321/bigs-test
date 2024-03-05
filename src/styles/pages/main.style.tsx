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

  .news__total {
    span {
      font-size: 1.6rem;
      font-weight: bold;
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
    .news {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
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

  .news__navigation {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    gap: 15px;
    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 1.5rem;
      color: #a0a0a0;
      cursor: pointer;
    }
    .active {
      color: #000;
    }
    svg {
      cursor: pointer;
    }
  }

  /* 데스크탑 */
  /* @media screen and (min-width: 1024px) {
  } */

  /* 노트북 */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 800px;
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    min-width: 395px;
    font-size: 1.3rem;
    padding: 0 20px;
    margin-top: 20px;
    box-sizing: border-box;
    .search__container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .search__keyword {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
    .news__total {
      text-align: center;
      span {
        font-size: 1.4rem;
        font-weight: bold;
      }
    }

    .news__list-meta {
      padding: 15px 10px;
      font-size: 1.4rem;
      .num {
        max-width: 30px;
        min-width: 20px;
      }
      .title {
        max-width: 500px;
        min-width: 200px;
      }
      .createdAt {
        max-width: 100px;
        min-width: 50px;
      }
    }

    .news__list {
      padding: 0;
      display: flex;
      flex-direction: column;
      .news {
        height: 40px;
        font-size: 1.4rem;
        .num {
          max-width: 20px;
          min-width: 20px;
        }
        .title {
          max-width: 500px;
          min-width: 200px;
        }
        .createdAt {
          max-width: 100px;
          min-width: 50px;
        }
      }
    }
  }
`;
