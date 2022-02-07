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
        const data = await getCryptoNews();

        setCryptoNews(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const formatDate = (date: string): string => {
    const rtf1 = new Intl.RelativeTimeFormat("en", {
      localeMatcher: "best fit",
      numeric: "always",
      style: "long"
    });

    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    if (hours > 0) {
      return rtf1.format(1 - (new Date().getHours() - hours), "hour");
    }
    return rtf1.format(1 - (new Date().getMinutes() - minutes), "minute");
  };
  return (
    <Wrapper>
      <Title>Latest Crypto News</Title>
      <main>
        {cryptoNews.map(
          ({ name, description, image, url, datePublished, about }) => {
            const timeAgo = formatDate(datePublished);

            return (
              <NewsCard key={uuidv4()}>
                <ImageContainer>
                  <img src={image?.thumbnail?.contentUrl} alt={name} />
                  <H2>{name}</H2>
                </ImageContainer>
                <InfoContainer>
                  <div>
                    <small>{timeAgo}</small>
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
            );
          }
        )}
      </main>
    </Wrapper>
  );
};

export default News;
