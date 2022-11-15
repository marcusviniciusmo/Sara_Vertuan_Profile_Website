import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ReactCountryFlag } from 'react-country-flag';
import { LanguageProps } from 'types/Language';
import { MockedData } from 'mocks/Language';
import { LayoutLanguage, FlagSection, Initials } from './styles';

export function Language() {
  const [mockedData, setMockedData] = useState<LanguageProps>();

  const { language, setLanguage } = useGlobalContext();

  useEffect(() => {
    setMockedData(MockedData.find((data) => data.language === language));
  }, [language]);

  return (
    <LayoutLanguage>
      {
        mockedData?.data.map((data) => {
          return (
            <FlagSection
              key={data.title}
              title={data.title}
              onClick={() => setLanguage(data.initials)}
            >
              <ReactCountryFlag countryCode={data.countryCode} />
              <Initials initials={data.initials} language={language}>
                {data.initials}
              </Initials>
            </FlagSection>
          )
        })
      }
    </LayoutLanguage>
  );
};