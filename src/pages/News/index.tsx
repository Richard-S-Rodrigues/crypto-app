import { useEffect, useState } from "react";
import { H2, Title } from "../../globalStyles";
import { getCryptoNews } from "../../services/cryptoNewsApi";
import { v4 as uuidv4 } from "uuid";
import { ImageContainer, InfoContainer, NewsCard, Wrapper } from "./styles";

interface ICryptoNews {
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

const News = () => {
  const [cryptoNews, setCryptoNews] = useState<ICryptoNews[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // To do: set Time like "1 hour ago"
        const data = await getCryptoNews();
        const diferrenceFromDates =
          new Date().getTime() - Number(new Date(data[0].datePublished));
        console.log(diferrenceFromDates);
        console.log(diferrenceFromDates / (1000 * 60 * 60 * 24));

        setCryptoNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  return (
    <Wrapper>
      <Title>Latest Crypto News</Title>
      <main>
        {cryptoNews.map(
          ({ name, description, image, url, datePublished, about }) => (
            <NewsCard key={uuidv4()}>
              <ImageContainer>
                <img src={image?.thumbnail?.contentUrl} alt={name} />
                <H2>{name}</H2>
              </ImageContainer>
              <InfoContainer>
                <div>
                  <small>{datePublished}</small>
                </div>
                <div>
                  <article>
                    <p>{description}</p>
                  </article>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "var(--color-darker-cyan)",
                      textDecoration: "none"
                    }}
                  >
                    Read more
                  </a>
                </div>
              </InfoContainer>
            </NewsCard>
          )
        )}
      </main>
    </Wrapper>
  );
};

export default News;
