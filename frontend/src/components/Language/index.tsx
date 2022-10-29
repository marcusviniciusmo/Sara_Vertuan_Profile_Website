import { useGlobalContext } from 'context';
import { ReactCountryFlag } from 'react-country-flag';
import { LayoutLanguage, FlagSection } from './styles';

export function Language() {
  const { setLanguage } = useGlobalContext();

  return (
    <LayoutLanguage>
      <FlagSection title='Português' onClick={() => setLanguage('PT')}>
        <ReactCountryFlag countryCode='BR' />
        <strong>PT</strong>
      </FlagSection>

      <FlagSection title='English' onClick={() => setLanguage('EN')}>
        <ReactCountryFlag countryCode='GB' />
        <strong>EN</strong>
      </FlagSection>

      <FlagSection title='Italiano' onClick={() => setLanguage('IT')}>
        <ReactCountryFlag countryCode='IT' />
        <strong>IT</strong>
      </FlagSection>
    </LayoutLanguage>
  );
};