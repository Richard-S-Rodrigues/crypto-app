import { useState } from "react";

import { Title, NavLink } from "../../globalStyles";
import { Wrapper, MenuWrapper } from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaHome, FaCoins } from "react-icons/fa";
import { BsCurrencyExchange, BsNewspaper } from "react-icons/bs";

const SideBar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return !isMenu ? (
    <Wrapper>
      <main>
        <Title>CryptoApp</Title>

        <GiHamburgerMenu
          style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
          onClick={() => setIsMenu(true)}
        />
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
              <NavLink to="/">
                <FaHome /> <span style={{ marginLeft: "1em" }}>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/cryptocurrencies">
                <FaCoins />
                <span style={{ marginLeft: "1em" }}>Cryptocurrencies</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/exchanges">
                <BsCurrencyExchange />
                <span style={{ marginLeft: "1em" }}>Exchanges</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">
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
