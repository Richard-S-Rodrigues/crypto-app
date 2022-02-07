import { useState } from "react";

import { NavLink } from "../../globalStyles";
import { Wrapper, NavigationContainer } from "./styles";

import { FaHome, FaCoins } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Header from "../Header";

const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { pathname: location } = useLocation();

  return (
    <Wrapper>
      <main>
        <Header isMenu={isMenu} setIsMenu={setIsMenu} />
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
  );
};

export default NavBar;
