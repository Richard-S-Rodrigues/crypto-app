import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;

  h1 {
    text-align: center;
  }

  main {
    width: 90%;
    display: block;
    margin: 1em auto;

    @media (min-width: 957px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(25em, 25%));
      grid-gap: 2em;
    }
  }
`;

export const NewsCard = styled.div`
  width: 100%;
  margin-top: 1em;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 0.5rem;

  @media (min-width: 650px) {
    width: auto;
    height: fit-content;
  }
`;

export const ImageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    & {
      flex-direction: row-reverse;
    }
  }

  h2 {
    margin: 1em auto;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 0.25rem;
  }
`;

export const InfoContainer = styled.section`
  & > div small {
    color: var(--color-grey);
  }

  article {
    margin: 1em auto;
  }

  article p {
    text-align: justify;
    font-size: 1em;
    line-height: 1.5em;
  }
`;

export const ButtonLink = styled.a`
  color: var(--color-darker-cyan);
  text-decoration: none;
  border: 1px solid var(--color-darker-cyan);
  border-radius: 0.25rem;
  padding: 0.5em;
  font-weight: 600;
  transition: all 1s;
  &:hover {
    background-color: var(--color-darker-cyan);
    color: #fff;
  }
`;
