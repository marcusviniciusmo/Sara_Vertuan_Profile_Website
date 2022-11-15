import { useEffect, useState } from "react";
import { useGlobalContext } from "context";
import { SocialMediaProps } from "types/SocialMedia";
import { MockedData } from "mocks/SocialMedia";
import { ContactCardContainer, ContactCardContent } from "styles/ContactCard";
import { Strong, MediasArea, Media, Link } from "./styles";

export function SocialMedia() {
  const [mockedData, setMockedData] = useState<SocialMediaProps>();

  const { language, theme } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <ContactCardContainer theme={theme}>
      <ContactCardContent theme={theme}>
        <Strong>{mockedData?.title}</Strong>

        <MediasArea>
          {
            mockedData?.medias.map((media) => {
              return (
                <Link key={media.id} href={media.link} target='_blank'>
                  <Media theme={theme} title={media.title}>
                    <media.icon color={media.color} />
                  </Media>
                </Link>
              )
            })
          }
        </MediasArea>
      </ContactCardContent>
    </ContactCardContainer>
  );
};