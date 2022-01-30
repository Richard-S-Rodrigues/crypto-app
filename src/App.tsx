import SideBar from "./components/SideBar";
import Home from "./pages/Home";

import { GlobalStyle } from "./globalStyles";

const App = () => (
  <>
    <GlobalStyle />
    <div>
      <SideBar />
      <Home />
    </div>
  </>
);

export default App;
