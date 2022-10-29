import { useState } from 'react';
import { ReactCountryFlag } from 'react-country-flag';
import { LayoutLanguage, FlagSection } from './styles';

export function Language() {
  const [, setLanguage] = useState<string>('PT');

  const handleLanguage = (languageCode: string) => {
    setLanguage(languageCode);
  };

  return (
    <LayoutLanguage>
      <FlagSection title='Português' onClick={() => handleLanguage('PT')}>
        <ReactCountryFlag countryCode='BR' />
        <strong>PT</strong>
      </FlagSection>

      <FlagSection title='English' onClick={() => handleLanguage('EN')}>
        <ReactCountryFlag countryCode='GB' />
        <strong>EN</strong>
      </FlagSection>

      <FlagSection title='Italiano' onClick={() => handleLanguage('IT')}>
        <ReactCountryFlag countryCode='IT' />
        <strong>IT</strong>
      </FlagSection>
    </LayoutLanguage>
  );
};