import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-darker-blue);
  color: #fff;

  @media (min-width: 650px) {
    & {
      width: 20em;
      min-height: 100vh;
      height: auto;
    }
  }
`;

export const NavigationContainer = styled.section`
  display: none;

  @media (min-width: 650px) {
    & {
      display: block;
      width: 80%;
      margin: 1em auto;
    }

    nav ul {
      list-style: none;
    }

    nav ul li {
      margin-top: 2em;
    }
  }
`;
