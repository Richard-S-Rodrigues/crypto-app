import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 4em 0;

  input {
    display: flex;
    margin: 0 auto;
  }

  @media (min-width: 650px) {
    padding: 1em 0;
  }

  h1 {
    text-align: center;
  }
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  input {
    margin: 1em 0;
  }
`;
