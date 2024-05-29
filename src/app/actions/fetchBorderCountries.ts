'use server';

import { Country } from '@/types/country';
import { getCountriesByCode } from '@/core/api/restCountriesApi';
import { borderCountriesMock } from '@/core/dataMocks/borderCountriesMock';

export async function fetchBorderCountries(countryCodes: Country['borders']) {
  try {
    const borderCountries: Country[] = await getCountriesByCode(
      countryCodes.map((code) => code.toLowerCase()).join(),
      ['name'],
    );

    return borderCountries;
  } catch (e) {
    return borderCountriesMock.map((country) => country.name.common);
  }
}
