import { LegacyRef, useEffect, useState } from "react";
import millify from "millify";
import handleViewport from "react-in-viewport";
import { getCoins } from "../../services/cryptoApi";

import Loading from "react-loading";

import { Card, CardBody, CardHeader, CardWrapper } from "./styles";

interface ICoinsCardProps {
  limit?: string;
  noScrollLoad?: boolean; // Does not load more contents when scrolled down
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

const CoinsCard = ({ limit, noScrollLoad }: ICoinsCardProps) => {
  const [coinsData, setCoinsData] = useState<ICoinsData[]>([]);
  const [newLimit, setNewLimit] = useState(Number(limit) || 50);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getData = async (newLimit: number) => {
      if (newLimit > 1 && newLimit <= 100) {
        const coins = await getCoins(String(newLimit));

        if (coins) {
          setCoinsData(coins);
          setIsLoading(false);
        }
      }
    };

    getData(newLimit);
  }, [newLimit]);

  const handleCardsLimit = (cardsLimit: number) => {
    if (isLoading) return;

    setNewLimit(cardsLimit + 10);
  };

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
      {newLimit <= 100 && !noScrollLoad && (
        <ViewportBlock onEnterViewport={() => handleCardsLimit(newLimit)} />
      )}
    </CardWrapper>
  );
};

export default CoinsCard;
