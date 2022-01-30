import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap');

  :root {
    --color-light-grey: #f7f7f7 ;
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

export const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1.5;
  font-weight: 600;
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  cursor: pointer;

  ${(props: any) =>
    props.primary &&
    css`
      background: blue;
      color: white;
    `}
`;
