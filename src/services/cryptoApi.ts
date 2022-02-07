import axios from "axios";

const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": import.meta.env.VITE_COINRANKING_RAPIDAPI_HOST as string,
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY as string | number
  },
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl"
  }
});

interface IGetCryptoStatsResponse {
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
}

export const getCryptoStats = async (): Promise<IGetCryptoStatsResponse> => {
  try {
    const response = await api.get("/stats");

    return response.data.data;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};

interface IGetCoinsResponse {
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

export const getCoins = async (
  limit?: string
): Promise<IGetCoinsResponse[]> => {
  try {
    const response = await api.get("/coins", {
      params: {
        timePeriod: "24h",
        tiers: "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: limit || "50",
        offset: "0"
      }
    });

    return response.data.data.coins;
  } catch (err: any) {
    console.log(err);
    return err;
  }
};

export const getCoin = async (coinId: string) => {
  try {
    const response = await api.get(`/coin/${coinId}`, {
      params: { timePeriod: "24h" }
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getCoinPriceHistory = async (coinId: string) => {
  try {
    const response = await api.get(`/coin/${coinId}/history`, {
      params: { timePeriod: "24h" }
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
