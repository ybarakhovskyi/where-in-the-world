import { createContext } from 'react';
import { Country } from '@/types/country';

export type SearchAndFilterContextType = {
  countries: Country[];
  filterValue: string | null;
  setSearchValue: (searchQuery: string) => void;
  setFilterValue: (optionValue: string | null) => void;
};

export const SearchAndFilterContext = createContext<SearchAndFilterContextType>(
  {
    countries: [],
    filterValue: null,
    setSearchValue: () => {},
    setFilterValue: () => {},
  },
);
