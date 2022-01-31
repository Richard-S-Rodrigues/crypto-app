import CoinsCard from "../../components/CoinsCard";
import { Title } from "../../globalStyles";
import { Wrapper } from "./styles";

const Cryptocurrencies = () => {
  return (
    <Wrapper>
      <Title>Currencies List</Title>
      <main>
        <CoinsCard />
      </main>
    </Wrapper>
  );
};

export default Cryptocurrencies;
