import { Title, NavLink } from "../../globalStyles";

import { CgClose } from "react-icons/cg";
import { FaHome, FaCoins } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { HamburgerMenu, HeaderWrapper, MenuWrapper } from "./styles";
import { useLocation } from "react-router-dom";

interface IHeaderProps {
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isMenu, setIsMenu }: IHeaderProps) => {
  const { pathname: location } = useLocation();

  return (
    <HeaderWrapper>
      {!isMenu ? (
        <header>
          <Title>CryptoApp</Title>

          <HamburgerMenu
            style={{ width: "1.5em", height: "1.5em", cursor: "pointer" }}
            onClick={() => setIsMenu(true)}
          />
        </header>
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
                      location === "/cryptocurrencies"
                        ? "var(--color-cyan)"
                        : ""
                    }
                    onClick={() => setIsMenu(false)}
                  >
                    <FaCoins />
                    <span style={{ marginLeft: "1em" }}>Cryptocurrencies</span>
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
      )}
    </HeaderWrapper>
  );
};

export default Header;
