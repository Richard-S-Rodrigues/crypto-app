import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  main {
    width: 80%;
    margin: 1em auto;
  }
`;

export const StatsWrapper = styled.div`
  display: block;
  margin-bottom: 4em;

  @media (min-width: 650px) {
    & {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 1em;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 1em;

    @media (min-width: 650px) {
      display: grid;
    }
  }

  div small {
    font-size: 1em;
    color: var(--color-grey);
  }

  div span {
    font-weight: 600;

    @media (min-width: 650px) {
      margin-top: 0.5em;
    }
  }
`;

export const CryptocurrenciesTitleContainer = styled.div`
  @media (min-width: 650px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
