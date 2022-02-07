import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCoin } from "../../services/cryptoApi";

interface ICoinDetails {
  name: string;
  symbol: string;
  price: string;
  priceAt: number;
  "24hVolume": string;
  btcPrice: string;
  change: string;
  numberOfExchanges: number;
  numberOfMarkets: number;
  lowVolume: boolean;
  marketCap: string;
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl: string;
  color: string;
  description: string;
  iconUrl: string;
  links: [
    {
      name: string;
      type: string;
      url: string;
    }
  ];
  listedAt: number;
  rank: number;
  websiteUrl: string;
}

const Cryptocurrency = () => {
  const [, , coinId] = useLocation().pathname.split("/");

  useEffect(() => {
    const getCoinDetails = async () => {
      const coin: ICoinDetails = await getCoin(coinId);
      console.log(coin);
    };

    getCoinDetails();
  }, []);
  return <div>Crypto details</div>;
};

export default Cryptocurrency;
