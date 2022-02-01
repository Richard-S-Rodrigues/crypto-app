import { useState } from "react";
import CoinsCard from "../../components/CoinsCard";
import { Input, Title } from "../../globalStyles";
import { Container, Wrapper } from "./styles";

const Cryptocurrencies = () => {
  const [searchValue, setSearchValue] = useState("");

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
