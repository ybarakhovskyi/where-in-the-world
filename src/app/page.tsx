// Modules
import { countriesMock } from '@/core/dataMocks';
import { fetchCountries } from '@/app/actions/fetchCountries';

// Components
import { HomeLayout } from '@/components/pages/home';
import { CountryList } from '@/components/pages/home/CountryList';
import { SearchProvider } from '@/components/pages/home/providers/SearchProvider';

// Types
import { Country } from '@/types/country';

export default async function Home() {
  let countries: Country[];

  try {
    countries = await fetchCountries();
  } catch (error) {
    countries = countriesMock;
  }

  return (
    <SearchProvider countries={countries}>
      <HomeLayout>
        <CountryList />
      </HomeLayout>
    </SearchProvider>
  );
}
