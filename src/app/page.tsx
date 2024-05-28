// Modules
import { getAllCountries } from '@/core/api/restCountriesApi';
import { countriesMock } from '@/core/dataMocks';

// Components
import { HomeLayout } from '@/components/pages/home';
import { CountryList } from '@/components/pages/home/CountryList';

// Types
import { Country } from '@/types/country';

export default async function Home() {
  let countries: Country[];

  try {
    countries = await getAllCountries([
      'flags',
      'name',
      'population',
      'region',
      'capital',
      'cca3',
      'ccn3',
    ]);
  } catch (error) {
    countries = countriesMock;
  }

  return (
    <HomeLayout>
      <CountryList countries={countries} />
    </HomeLayout>
  );
}
