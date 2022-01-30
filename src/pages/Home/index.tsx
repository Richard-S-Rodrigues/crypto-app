import { useEffect, useState } from "react";
import millify from "millify";
import Loading from "react-loading";

import { Title } from "../../globalStyles";
import { getCoins } from "../../services/cryptoApi";

import { Wrapper, CardWrapper, Card, CardHeader, CardBody } from "./styles";

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
    <Wrapper>
      <main>
        <Title>Top 10 Cryptocurrencies</Title>
        <CardWrapper>
          {!coins.length ? (
            <Loading color="var(--color-cyan)" />
          ) : (
            coins.map((coin) => (
              <Card key={coin.uuid}>
                <CardHeader>
                  <img src={coin.iconUrl} />
                  <h2>{coin.name}</h2>
                </CardHeader>
                <CardBody>
                  <p>Price: {millify(Number(coin.price))}</p>
                  <p>Market cap: {millify(Number(coin.marketCap))}</p>
                  <p>Daily change: {coin.change}%</p>
                  <p>Rank: {coin.rank}</p>
                </CardBody>
              </Card>
            ))
          )}
        </CardWrapper>
      </main>
    </Wrapper>
  );
};

export default Home;
