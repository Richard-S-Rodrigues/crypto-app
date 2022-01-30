import AppRoutes from "./AppRoutes";

import { AppContainer, GlobalStyle } from "./globalStyles";

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  </>
);

export default App;
