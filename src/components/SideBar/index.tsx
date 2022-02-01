import { useState } from "react";

import { Title, NavLink } from "../../globalStyles";
import {
  Wrapper,
  MenuWrapper,
  TitleContainer,
  NavigationContainer,
  HamburgerMenu
} from "./styles";

import { CgClose } from "react-icons/cg";
import { FaHome, FaCoins } from "react-icons/fa";
import { BsCurrencyExchange, BsNewspaper } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { pathname: location } = useLocation();

  return !isMenu ? (
    <Wrapper>
      <main>
        <TitleContainer>
          <Title>CryptoApp</Title>

          <HamburgerMenu
            style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
            onClick={() => setIsMenu(true)}
          />
        </TitleContainer>
        <NavigationContainer>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  color={location === "/" ? "var(--color-cyan)" : ""}
                >
                  <FaHome /> <span style={{ marginLeft: "1em" }}>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cryptocurrencies"
                  color={
                    location === "/cryptocurrencies" ? "var(--color-cyan)" : ""
                  }
                >
                  <FaCoins />
                  <span style={{ marginLeft: "1em" }}>Cryptocurrencies</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/exchanges"
                  color={location === "/exchanges" ? "var(--color-cyan)" : ""}
                >
                  <BsCurrencyExchange />
                  <span style={{ marginLeft: "1em" }}>Exchanges</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  color={location === "/news" ? "var(--color-cyan)" : ""}
                >
                  <BsNewspaper />
                  <span style={{ marginLeft: "1em" }}>News</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </NavigationContainer>
      </main>
    </Wrapper>
  ) : (
    <MenuWrapper>
      <CgClose
        style={{
          position: "absolute",
          top: "16",
          right: "30",
          width: "2em",
          height: "2em",
          cursor: "pointer"
        }}
        onClick={() => setIsMenu(false)}
      />
      <main>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                color={location === "/" ? "var(--color-cyan)" : ""}
                onClick={() => setIsMenu(false)}
              >
                <FaHome /> <span style={{ marginLeft: "1em" }}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cryptocurrencies"
                color={
                  location === "/cryptocurrencies" ? "var(--color-cyan)" : ""
                }
                onClick={() => setIsMenu(false)}
              >
                <FaCoins />
                <span style={{ marginLeft: "1em" }}>Cryptocurrencies</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exchanges"
                color={location === "/exchanges" ? "var(--color-cyan)" : ""}
                onClick={() => setIsMenu(false)}
              >
                <BsCurrencyExchange />
                <span style={{ marginLeft: "1em" }}>Exchanges</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                color={location === "/news" ? "var(--color-cyan)" : ""}
                onClick={() => setIsMenu(false)}
              >
                <BsNewspaper />
                <span style={{ marginLeft: "1em" }}>News</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </MenuWrapper>
  );
};

export default SideBar;
