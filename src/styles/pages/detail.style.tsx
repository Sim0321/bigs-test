import styled from "styled-components";

export const DetailWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px;
  .detail__title {
    font-size: 3rem;
    font-weight: bold;
  }
  .detail__meta {
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
    margin-top: 10px;
    border-bottom: 1px solid #f2f2f2;
    span {
      font-weight: 600;
      color: #8b8a8a;
    }
  }
  .detail__description {
    font-size: 1.7rem;
  }
  a {
    text-decoration: none;
  }
  .to-list {
    width: 130px;
    height: 35px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #72a1ff;
    color: #72a1ff;
    font-size: 1.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.4rem;
    .to-list {
      width: 100px;
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    .to-list {
      width: 60px;
      font-size: 1.2rem;
    }
  }
`;
