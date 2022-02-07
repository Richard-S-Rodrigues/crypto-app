import styled from "styled-components";

export const CardWrapper = styled.div`
  display: block;

  @media (min-width: 650px) {
    & {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 1.5em;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  background-color: #ddd;
  margin-top: 1em;
`;

export const CardHeader = styled.section`
  text-align: center;
  padding: 1em 0;
  border-bottom: 1px solid var(--color-light-grey);

  img {
    width: 5em;
    height: 5em;
  }
`;
export const CardBody = styled.section`
  display: block;
  padding: 1em;

  p {
    margin-top: 1em;
  }
`;
