import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;

  @media (min-width: 576px) {
    text-align: left;
    grid-template-columns: 5fr 1fr;
  }
`;

export const Searchbox = styled.form`
  display: flex;
  align-items: center;
  justify-self: center;
  margin-bottom: 20px;

  @media (min-width: 576px) {
    justify-self: flex-end;
    margin-bottom: 0;
  }
`; 
