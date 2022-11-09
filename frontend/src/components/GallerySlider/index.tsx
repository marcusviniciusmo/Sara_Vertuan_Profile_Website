/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { GallerySliderProps } from "types/GalerySlider";
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
        mockedData.map((image) => {
          return (
            <Card
              key={image.image.id}
              background={image.image.url}
              cardId={image.image.id}
              length={mockedData.length}
            >
            </Card>
          )
        })
      }
    </Carousel>
  );
};