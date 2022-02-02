import axios from "axios";

const api = axios.create({
  baseURL: "https://bing-news-search1.p.rapidapi.com/news",
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": import.meta.env.VITE_BINGNEWS_RAPIDAPI_HOST as string,
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY as string | number
  },
  params: {
    safeSearch: "Off",
    freshness: "Day",
    textFormat: "Raw"
  }
});

interface IGetCryptoNewsResponse {
  name: string;
  description: string;
  image: {
    thumbnail: {
      contentUrl: string;
      height: number;
      width: number;
    };
  };
  url: string;
  about: ICryptoNewsContentAbout[];
  datePublished: string;
}

interface ICryptoNewsContentAbout {
  name: string;
}

export const getCryptoNews = async (): Promise<IGetCryptoNewsResponse[]> => {
  try {
    const response = await api.get("/search?q=cryptocurrencies");

    return response.data.value;
  } catch (error: any) {
    console.error(error);
    return error;
  }
};
