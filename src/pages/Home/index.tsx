import { useEffect, useState } from "react";
import millify from "millify";

import { getCryptoStats } from "../../services/cryptoApi";

import CoinsCard from "../../components/CoinsCard";

import { NormalLink, Title } from "../../globalStyles";

import { Wrapper, StatsWrapper } from "./styles";

const Home = () => {
  const [total24hVolume, setTotal24hVolume] = useState("");
  const [totalCoins, setTotalCoins] = useState(0);
  const [totalExchanges, setTotalExchanges] = useState(0);
  const [totalMarketCap, setTotalMarketCap] = useState("");
  const [totalMarkets, setTotalMarkets] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const cryptoStats = await getCryptoStats();

      setTotal24hVolume(cryptoStats.total24hVolume);
      setTotalCoins(cryptoStats.totalCoins);
      setTotalExchanges(cryptoStats.totalExchanges);
      setTotalMarketCap(cryptoStats.totalMarketCap);
      setTotalMarkets(cryptoStats.totalMarkets);
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
              <span>${millify(Number(total24hVolume))}</span>
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
              <span>${millify(Number(totalMarketCap))}</span>
            </div>
            <div>
              <small>Total Markets</small>
              <span>{millify(totalMarkets)}</span>
            </div>
          </StatsWrapper>
        </section>
        <section>
          <div>
            <Title>Top 10 Cryptocurrencies</Title>
            <NormalLink to="/cryptocurrencies">Show more</NormalLink>
          </div>
          <CoinsCard />
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
