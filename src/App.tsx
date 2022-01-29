import { useEffect } from "react";
import {
  getAllCoins,
  getCoin,
  getCoinExchanges,
  getCoinPriceHistory
} from "./services/cryptoApi";

import "./App.css";

function App() {
  useEffect(() => {
    //getAllCoins();
    const btc = "Qwsogvtv82FCd";
    //getCoinPriceHistory(btc);
    getCoinExchanges(btc);
    //getCoin(btc);
  }, []);
  return <div>Hello world</div>;
}

export default App;
