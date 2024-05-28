import { Country } from '@/types/country';

export const getCountryDetails = (country: Country): [string, string][] => {
  const { name, currencies, languages } = country;

  const nativeName = Object.values(name.nativeName).reduce(
    (result, nativeNameData) => {
      return result.length > 0
        ? `${result}, ${nativeNameData.official}`
        : nativeNameData.official;
    },
    '',
  );

  const currenciesAsString = Object.values(currencies).reduce(
    (result, currencyData) => {
      return result.length > 0
        ? `${result}, ${currencyData.name}`
        : currencyData.name;
    },
    '',
  );
  const languagesAsString = Object.values(languages).join(', ');

  return [
    ['Native Name', nativeName],
    ['Region', country.region],
    ['Capital', country.capital.join(', ')],
    ['Currencies', currenciesAsString],
    ['Population', country.population.toString()],
    ['Sub Region', country.subregion],
    ['Top Level Domain', country.tld.join(', ')],
    ['Languages', languagesAsString],
  ];
};
