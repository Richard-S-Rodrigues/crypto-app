import { useState } from "react";
import CoinsCard from "../../components/CoinsCard";
import { Input, Title } from "../../globalStyles";
import { getCoins } from "../../services/cryptoApi";
import { Container, Wrapper } from "./styles";

const Cryptocurrencies = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = async (event: any) => {
    const searchValue = event.target.value.toLowerCase();

    await getData(searchValue);
  };

  const getData = async (cryptoName: string) => {
    const coins = await getCoins("100");
    const filteredCoins = [] as any;

    coins.forEach((coin) => {
      if (coin.name.toLowerCase().indexOf(cryptoName) !== -1) {
        filteredCoins.push(coin);
      }
    });
    console.log(filteredCoins);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Currencies List</Title>
        <Input
          type="text"
          placeholder="Search crypto..."
          onChange={(event) => setSearchValue(event.target.value)}
        />

        <main>
          <CoinsCard searchValue={searchValue} />
        </main>
      </Container>
    </Wrapper>
  );
};

export default Cryptocurrencies;
