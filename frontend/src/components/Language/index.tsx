import { ReactCountryFlag } from 'react-country-flag';

export function Language() {
  return (
    <>
      <h1>LANGUAGE Component</h1>

      <h3>Idioma</h3>
      <ReactCountryFlag countryCode='BR' />
      <h5>Português</h5>
      <ReactCountryFlag countryCode='GB' />
      <h5>Inglês</h5>
      <ReactCountryFlag countryCode='IT' />
      <h5>Italiano</h5>
    </>
  );
};