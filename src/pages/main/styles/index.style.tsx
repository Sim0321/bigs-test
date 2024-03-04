import styled from "styled-components";

export const MainWrap = styled.div`
  padding: 50px 0;
  /* background-color: pink; */
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
    .search__sort-selector {
      width: 250px;
      border: 1px solid;
      height: 40px;
    }
    .search__keyword {
      display: flex;
      gap: 10px;
      &-selector {
        width: 140px;
        border: 1px solid;
      }
      .search__input {
        width: 550px;
        height: 40px;
      }
    }
  }

  .news__list-meta {
    padding: 30px 20px;
    border: 1px solid #f2f2f2;
    display: flex;
    font-size: 1.6rem;
    .num {
      max-width: 100px;
      min-width: 100px;
      width: 100%;
      /* background-color: skyblue; */
    }
    .title {
      max-width: 900px;
      min-width: 500px;
      width: 100%;
      /* background-color: yellowgreen; */
    }
    .createdAt {
      max-width: 200px;
      min-width: 150px;
      width: 100%;
      /* background-color: coral; */
      display: flex;
      justify-content: flex-end;
    }
  }

  .news__list {
    /* background-color: pink; */
    padding: 0 21px;

    .news {
      /* background-color: beige; */
      display: flex;
      .num {
        max-width: 100px;
        min-width: 100px;
        width: 100%;
        /* background-color: skyblue; */
      }
      .title {
        max-width: 900px;
        min-width: 500px;
        width: 100%;
        /* background-color: yellowgreen; */
      }
      .createdAt {
        max-width: 200px;
        min-width: 150px;
        width: 100%;
        /* background-color: coral; */
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
