import AppRoutes from "./AppRoutes";

import { AppWrapper, GlobalStyle } from "./globalStyles";

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <AppRoutes />
    </AppWrapper>
  </>
);

export default App;
