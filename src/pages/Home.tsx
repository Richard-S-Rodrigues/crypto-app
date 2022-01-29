import { useEffect, useState } from "react";
import { getCoins } from "../services/cryptoApi";

type coinData = {
  uuid: string;
  "24hVolume": string;
  btcPrice: string;
  change: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  symbol: string;
};

const Home = () => {
  const [coins, setCoins] = useState<coinData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { coins } = await getCoins("10");
      setCoins(coins);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Top 10 Cryptocurrencies</h1>
      <div>
        {coins.map((coin) => (
          <div key={coin.uuid}>
            <p>{coin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
