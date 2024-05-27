import { HomeLayout } from '@/components/pages/home';
import { CountryList } from '@/components/pages/home/CountryList';
import { Country } from '@/types/country';
import { getAllCountries } from '@/core/api/restCountriesApi';

export default async function Home() {
  let countries: Country[] = [];

  try {
    const response = await getAllCountries();
    countries = await response.json();
  } catch (e) {}

  return (
    <HomeLayout>
      <CountryList countries={countries} />
    </HomeLayout>
  );
}
