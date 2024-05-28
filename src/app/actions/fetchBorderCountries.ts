'use server';

import { Country } from '@/types/country';
import { getCountriesByCode } from '@/core/api/restCountriesApi';

export async function fetchBorderCountries(countryCodes: Country['borders']) {
  const borderCountries: Country[] = await getCountriesByCode(
    countryCodes.map((code) => code.toLowerCase()).join(),
    ['name'],
  );

  return borderCountries;
}
