import axios from "axios";

const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY as string | number
  }
});

export const getCoins = async (limit?: string) => {
  try {
    const response = await api.get("/coins", {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        tiers: "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: limit || "50",
        offset: "0"
      }
    });

    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCoin = async (coinId: string) => {
  try {
    const response = await api.get(`/coin/${coinId}`, {
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" }
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getCoinPriceHistory = async (coinId: string) => {
  try {
    const response = await api.get(`/coin/${coinId}/history`, {
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" }
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getCoinExchanges = async (coinId: string) => {
  try {
    const response = await api.get(`/coin/${coinId}/exchanges`, {
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" }
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
