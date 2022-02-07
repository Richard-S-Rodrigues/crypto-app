import { useEffect, useState } from "react";
import { H2, Title } from "../../globalStyles";
import { getCryptoNews } from "../../services/cryptoNewsApi";
import { v4 as uuidv4 } from "uuid";
import {
  ButtonLink,
  ImageContainer,
  InfoContainer,
  NewsCard,
  Wrapper
} from "./styles";

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
  datePublished: string;
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

    const hours = new Date(date).getUTCHours();
    const minutes = new Date(date).getUTCMinutes();
    const currentHours = new Date().getHours();
    const currentMinutes = new Date().getMinutes();

    if (currentHours - hours > 0) {
      return rtf1.format(-(currentHours - hours), "hour");
    }
    return rtf1.format(-(currentMinutes - minutes), "minute");
  };
  return (
    <Wrapper>
      <Title>Latest Crypto News</Title>
      <main>
        {cryptoNews.map(({ name, description, image, url, datePublished }) => {
          const timeAgo = formatDate(datePublished);

          return (
            <NewsCard key={uuidv4()}>
              <ImageContainer>
                <img src={image?.thumbnail?.contentUrl} alt="" />
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
                  <ButtonLink href={url} target="_blank" rel="noreferrer">
                    Read more
                  </ButtonLink>
                </div>
              </InfoContainer>
            </NewsCard>
          );
        })}
      </main>
    </Wrapper>
  );
};

export default News;
