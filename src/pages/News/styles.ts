import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1em 0;

  h1 {
    text-align: center;
  }

  main {
    width: 80%;
    margin: 0 auto;
  }
`;

export const NewsCard = styled.div`
  width: 100%;
  margin: 2em auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 0.25rem;
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
`;
