import { useEffect, useState } from "react";
import millify from "millify";
import { getCoins } from "../../services/cryptoApi";

import Loading from "react-loading";

import { Card, CardBody, CardHeader, CardWrapper } from "./styles";

interface ICoinsCardProps {
  limit?: string;
}

interface ICoinsData {
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
}

const CoinsCard = ({ limit }: ICoinsCardProps) => {
  const [coinsData, setCoinsData] = useState<ICoinsData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const coins = await getCoins(limit);

      setCoinsData(coins);
    };

    getData();
  }, []);

  return (
    <CardWrapper>
      {!coinsData.length ? (
        <Loading color="var(--color-cyan)" />
      ) : (
        coinsData.map((coin) => (
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
  );
};

export default CoinsCard;
