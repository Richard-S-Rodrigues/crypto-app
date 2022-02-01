import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  header {
    width: 80%;
    margin: auto;
    padding: 1em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
