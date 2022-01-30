import { useState } from "react";
import { Title } from "../../globalStyles";
import { Wrapper, MenuWrapper } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaHome, FaCoins } from "react-icons/fa";
import { BsCurrencyExchange, BsNewspaper } from "react-icons/bs";

const SideBar = () => {
  const [isMenu, setIsMenu] = useState(true);

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
              <FaHome /> <span style={{ marginLeft: "1em" }}>Home</span>
            </li>
            <li>
              <FaCoins />
              <span style={{ marginLeft: "1em" }}>Cryptocurrencies</span>
            </li>
            <li>
              <BsCurrencyExchange />
              <span style={{ marginLeft: "1em" }}>Exchanges</span>
            </li>
            <li>
              <BsNewspaper />
              <span style={{ marginLeft: "1em" }}>News</span>
            </li>
          </ul>
        </nav>
      </main>
    </MenuWrapper>
  );
};

export default SideBar;
