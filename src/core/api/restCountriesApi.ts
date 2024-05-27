import { CountryField } from '@/types/country';

const BASE_API_ENDPOINT = 'https://restcountries.com/v3.1';

enum SearchEndpoint {
  NAME = 'name',
  CODE = 'code',
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
  get: (endpoint: string) => fetch(endpoint),
};

const createRequestUrl = ({
  searchEndpoint,
  searchValue,
  filterFields,
}: {
  searchEndpoint: SearchEndpoint;
  searchValue?: string;
  filterFields?: CountryField[];
}): string => {
  const urlWithSearchEndpoint = `${BASE_API_ENDPOINT}/${searchEndpoint}`;
  const urlWithSearchValue = searchValue
    ? `${urlWithSearchEndpoint}/${searchValue}`
    : urlWithSearchEndpoint;
  const filteredFields = filterFields || expectedFields;

  return `${urlWithSearchValue}?fields=${filteredFields.join(',')}`;
};

export const getAllCountries = () =>
  api.get(
    createRequestUrl({
      searchEndpoint: SearchEndpoint.ALL,
    }),
  );

export const getCountryByName = (
  countryName: string,
  filterFields?: CountryField[],
) =>
  api.get(
    createRequestUrl({
      searchEndpoint: SearchEndpoint.NAME,
      searchValue: countryName,
      filterFields,
    }),
  );

export const getCountryByCode = (
  countryCode: string,
  filterFields?: CountryField[],
) =>
  api.get(
    createRequestUrl({
      searchEndpoint: SearchEndpoint.CODE,
      searchValue: countryCode,
      filterFields,
    }),
  );
