// Vendors
import { notFound } from 'next/navigation';

// Modules
import { getCountryByName } from '@/core/api/restCountriesApi';

// Components
import { CountryInfo } from '@/components/pages/country/CountryInfo';
import { CountryInfoLayout } from '@/components/pages/country';

// Types
import { Country } from '@/types/country';
import { fetchBorderCountries } from '@/app/actions/fetchBorderCountries';
import { countryMock } from '@/core/dataMocks';
import { borderCountriesMock } from '@/core/dataMocks/borderCountriesMock';

type CompanyPageParams = {
  params: {
    countryName: string;
  };
};

export default async function CountryPage({ params }: CompanyPageParams) {
  let country: Country = countryMock;
  let borderCountries: Country[] | string[] = [];

  try {
    const [countryData]: [Country] = await getCountryByName(params.countryName);

    if (!countryData) return notFound();

    country = countryData;

    if (country.borders.length) {
      borderCountries = await fetchBorderCountries(country.borders);
    }
  } catch (e) {
    borderCountries = borderCountriesMock.map((country) => country.name.common);
  }

  return (
    <CountryInfoLayout>
      <CountryInfo country={country} borderCountries={borderCountries} />
    </CountryInfoLayout>
  );
}
