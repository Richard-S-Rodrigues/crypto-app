import styled, { createGlobalStyle, css } from "styled-components";

import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`

  :root {
    --color-light-grey: #f7f7f7;
    --color-grey: #808080;
    --color-light-blue: #3f50e8;
    --color-blue: #007aff;
    --color-darker-blue: #0a1045;
    --color-cyan: #00ffbf;
    --color-darker-cyan: #00b386;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--color-light-grey);
  }

`;

export const AppWrapper = styled.div`
  display: block;

  @media (min-width: 650px) {
    & {
      display: flex;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: 600;
`;

export const NormalLink = styled(Link)`
  color: var(--color-darker-cyan);
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: 0.8s color;

  &:hover {
    color: var(--color-cyan);
  }

  ${(props: any) => {
    console.log(props);
    return (
      props.to === window.location.pathname &&
      css`
        color: var(--color-cyan);
      `
    );
  }}
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0.25rem;
  padding: 1em;
  font-size: 1em;

  &:focus {
    outline: none;
    border: 1px solid var(--color-cyan);
  }
`;
