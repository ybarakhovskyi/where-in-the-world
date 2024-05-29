import { getAllCountries } from '@/core/api/restCountriesApi';

export async function fetchCountries() {
  return await getAllCountries([
    'flags',
    'name',
    'population',
    'region',
    'capital',
    'cca3',
    'ccn3',
  ]);
}
