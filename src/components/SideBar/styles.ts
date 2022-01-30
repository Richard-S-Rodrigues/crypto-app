import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

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

export const HamburgerMenu = styled(GiHamburgerMenu)`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;

  @media (min-width: 650px) {
    & {
      display: none;
    }
  }
`;

export const TitleContainer = styled.section`
  width: 80%;
  margin: auto;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const MenuWrapper = styled.div`
  background-color: var(--color-darker-blue);
  color: #fff;
  height: auto;

  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  nav ul {
    display: block;
    flex-direction: column;
    align-items: center;
    margin: 10em auto;
  }

  nav ul li {
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 1.2em;
    margin-top: 2em;
  }
`;
