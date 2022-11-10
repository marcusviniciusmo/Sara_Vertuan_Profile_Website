import { useEffect, useState } from 'react';
import { useGlobalContext } from 'context';
import { ReactCountryFlag } from 'react-country-flag';
import { LanguageProps } from 'types/Language';
import { MockedData } from 'mocks/Language';
import { LayoutLanguage, FlagSection } from './styles';
import './styles.css';

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
              title={data.title}
              key={data.title}
              onClick={() => setLanguage(data.initials)}
            >
              <ReactCountryFlag countryCode={data.countryCode} />
              <strong
                className={data.initials === language ? 'languageSet' : ''}
              >
                {data.initials}
              </strong>
            </FlagSection>
          )
        })
      }
    </LayoutLanguage>
  );
};