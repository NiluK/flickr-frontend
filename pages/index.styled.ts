import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  display: grid;
  margin: 0 auto;
  padding: 10px;
`;
