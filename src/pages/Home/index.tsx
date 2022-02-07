import { useEffect, useState } from "react";
import millify from "millify";

import { getCryptoStats } from "../../services/cryptoApi";

import CoinsCard from "../../components/CoinsCard";

import { NormalLink, Title } from "../../globalStyles";

import {
  Wrapper,
  StatsWrapper,
  CryptocurrenciesTitleContainer
} from "./styles";

const Home = () => {
  const [total24hVolume, setTotal24hVolume] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [totalExchanges, setTotalExchanges] = useState(0);
  const [totalMarketCap, setTotalMarketCap] = useState(0);
  const [totalMarkets, setTotalMarkets] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const cryptoStats = await getCryptoStats();

        if (cryptoStats) {
          setTotal24hVolume(Number(cryptoStats.total24hVolume));
          setTotalCoins(cryptoStats.totalCoins);
          setTotalExchanges(cryptoStats.totalExchanges);
          setTotalMarketCap(Number(cryptoStats.totalMarketCap));
          setTotalMarkets(cryptoStats.totalMarkets);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <main>
        <section>
          <Title>Crypto Stats</Title>
          <StatsWrapper>
            <div>
              <small>Total 24h volume</small>
              <span>${millify(total24hVolume)}</span>
            </div>
            <div>
              <small>Total coins</small>
              <span>{millify(totalCoins)}</span>
            </div>
            <div>
              <small>Total Exchanges</small>
              <span>{millify(totalExchanges)}</span>
            </div>
            <div>
              <small>Total Market cap</small>
              <span>${millify(totalMarketCap)}</span>
            </div>
            <div>
              <small>Total Markets</small>
              <span>{millify(totalMarkets)}</span>
            </div>
          </StatsWrapper>
        </section>
        <section>
          <CryptocurrenciesTitleContainer>
            <Title>Top 10 Cryptocurrencies</Title>
            <NormalLink to="/cryptocurrencies">Show more</NormalLink>
          </CryptocurrenciesTitleContainer>
          <CoinsCard limit={"10"} noScrollLoad />
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
