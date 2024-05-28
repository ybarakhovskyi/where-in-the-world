import { CountryField } from '@/types/country';

const BASE_API_ENDPOINT = 'https://restcountries.com/v3.1';

enum SearchEndpoint {
  NAME = 'name',
  CODE = 'alpha',
  ALL = 'all',
}

const expectedFields: CountryField[] = [
  'borders',
  'capital',
  'cca3',
  'ccn3',
  'currencies',
  'flags',
  'languages',
  'name',
  'population',
  'region',
  'subregion',
  'tld',
];

const api = {
  get: (endpoint: string) => fetch(endpoint, { cache: 'force-cache' }),
};

const createRequestUrl = ({
  searchEndpoint,
  searchValue,
  filterFields,
}: {
  searchEndpoint: SearchEndpoint | string;
  searchValue?: string;
  filterFields?: CountryField[];
}): string => {
  const urlWithSearchEndpoint = `${BASE_API_ENDPOINT}/${searchEndpoint}`;
  const urlWithSearchValue = searchValue
    ? `${urlWithSearchEndpoint}/${searchValue}`
    : urlWithSearchEndpoint;
  const alreadyHaveQuery = urlWithSearchValue.includes('?');
  const filteredFields = filterFields || expectedFields;

  const finalquery = `${urlWithSearchValue}${alreadyHaveQuery ? '&' : '?'}fields=${filteredFields.join(',')}`;

  console.log('Ybarakhovskyi DEBUG:', finalquery);

  return finalquery;
};

export const getAllCountries = async (filterFields?: CountryField[]) => {
  const response = await api.get(
    createRequestUrl({
      searchEndpoint: SearchEndpoint.ALL,
      filterFields,
    }),
  );

  return await response.json();
};

export const getCountryByName = async (
  countryName: string,
  filterFields?: CountryField[],
) => {
  const response = await api.get(
    createRequestUrl({
      searchEndpoint: SearchEndpoint.NAME,
      searchValue: countryName,
      filterFields,
    }),
  );

  return await response.json();
};

export const getCountriesByCode = async (
  countryCodes: string,
  filterFields?: CountryField[],
) => {
  const response = await api.get(
    createRequestUrl({
      searchEndpoint: `${SearchEndpoint.CODE}?codes=${countryCodes}`,
      filterFields,
    }),
  );

  return response.json();
};
