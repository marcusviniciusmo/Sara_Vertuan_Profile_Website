import { useEffect, useState } from "react";
import { GallerySliderProps } from "types/GallerySlider";
import { MockedData } from "mocks/GallerySlider";
import { Carousel, Card } from "./styles";

export function GallerySlider() {
  const [mockedData, setMockedData] = useState<GallerySliderProps[]>([]);

  useEffect(() => {
    setMockedData(MockedData);
  }, []);

  return (
    <Carousel>
      {
        mockedData.map((imageCard) => {
          return (
            <Card
              key={imageCard.image.id}
              background={imageCard.image.url}
              cardId={imageCard.image.id}
              length={mockedData.length}
            >
            </Card>
          )
        })
      }
    </Carousel>
  );
};