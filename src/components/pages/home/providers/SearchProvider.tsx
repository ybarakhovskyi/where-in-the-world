'use client';

// Vendors
import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { debounce } from 'next/dist/server/utils';

// Modules
import {
  SearchAndFilterContext,
  SearchAndFilterContextType,
} from './searchContext';

// Types
import { Country } from '@/types/country';

type SearchProviderProps = PropsWithChildren<{
  countries: Country[];
}>;

export const SearchProvider: FC<SearchProviderProps> = ({
  countries,
  children,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState<string | null>(null);

  const foundCountries = useMemo(
    () =>
      countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();

        return countryName.includes(searchValue.toLowerCase());
      }),
    [countries, searchValue],
  );
  const filteredCountries = useMemo(() => {
    if (filterValue) {
      return foundCountries.filter((country) => {
        const regionName = country.region.toLowerCase();

        return regionName.includes(filterValue.toLowerCase());
      });
    }

    return foundCountries;
  }, [foundCountries, filterValue]);

  const contextValue = useMemo(
    (): SearchAndFilterContextType => ({
      setSearchValue: debounce(setSearchValue, 300),
      setFilterValue,
      filterValue,
      countries: filteredCountries,
    }),
    [filterValue, filteredCountries],
  );

  return (
    <SearchAndFilterContext.Provider value={contextValue}>
      {children}
    </SearchAndFilterContext.Provider>
  );
};
