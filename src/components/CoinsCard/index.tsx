import { LegacyRef, useEffect, useState } from "react";
import millify from "millify";
import handleViewport from "react-in-viewport";
import { getCoins } from "../../services/cryptoApi";

import Loading from "react-loading";

import { Card, CardBody, CardHeader, CardWrapper } from "./styles";

interface ICoinsCardProps {
  limit?: string;
  noScrollLoad?: boolean; // if "true" does not load more contents when scrolled down
  searchValue?: string;
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

interface IBlockProps {
  inViewport: boolean;
  forwardedRef: LegacyRef<HTMLDivElement> | undefined;
}

const Block = ({ inViewport, forwardedRef }: IBlockProps) => {
  return (
    <div ref={forwardedRef}>
      {inViewport && <Loading color="var(--color-darker-cyan)" />}
    </div>
  );
};
const ViewportBlock = handleViewport(Block);

const CoinsCard = ({ limit, noScrollLoad, searchValue }: ICoinsCardProps) => {
  const [coinsData, setCoinsData] = useState<ICoinsData[]>([]);
  const [filteredCoinsData, setFilteredCoinsData] = useState<ICoinsData[]>([]);
  const [newLimit, setNewLimit] = useState(Number(limit) || 50);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async (newLimit: number) => {
      const coins = await getCoins(String(newLimit > 100 ? 100 : newLimit));
      if (coins) {
        setCoinsData(coins);
      }
    };

    getData(newLimit);
    setIsLoading(false);
  }, [newLimit]);

  useEffect(() => {
    setFilteredCoinsData([]);

    const getFilteredData = async (name: string) => {
      const coins = await getCoins("100");
      const filteredCoins = [] as ICoinsData[];

      coins.forEach((coin) => {
        if (coin.name.toLowerCase().indexOf(name.trim()) !== -1) {
          filteredCoins.push(coin);
        }
      });

      setFilteredCoinsData(filteredCoins);
    };

    if (searchValue?.trim()) {
      getFilteredData(searchValue);
    }
  }, [searchValue]);

  const handleCardsLimit = (cardsLimit: number) => {
    if (isLoading) return;
    setNewLimit(cardsLimit + 10);
  };

  return (
    <CardWrapper>
      {isLoading && <Loading color="var(--color-cyan)" />}

      {filteredCoinsData.length > 0 ? (
        filteredCoinsData.map((coin) => (
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
      ) : !coinsData.length && !isLoading ? (
        <div>Cryptocurrencies not found!</div>
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
      {newLimit <= 100 && !noScrollLoad && coinsData.length > 0 && (
        <ViewportBlock onEnterViewport={() => handleCardsLimit(newLimit)} />
      )}
    </CardWrapper>
  );
};

export default CoinsCard;
