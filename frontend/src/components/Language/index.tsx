import { ReactCountryFlag } from 'react-country-flag';
import { LayoutLanguage, FlagSection } from './styles';

export function Language() {
  return (
    <LayoutLanguage>
      <FlagSection title='Português'>
        <ReactCountryFlag countryCode='BR' />
        <strong>PT</strong>
      </FlagSection>

      <FlagSection title='English'>
        <ReactCountryFlag countryCode='GB' />
        <strong>EN</strong>
      </FlagSection>

      <FlagSection title='Italiano'>
        <ReactCountryFlag countryCode='IT' />
        <strong>IT</strong>
      </FlagSection>
    </LayoutLanguage>
  );
};