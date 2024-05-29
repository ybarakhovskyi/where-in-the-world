'use client';

import { FC, useContext } from 'react';
import { CountryListItem } from '@/components/pages/home/CountryList/CountryListItem';

// Styles
import { StyledCountryList } from '@/components/pages/home/CountryList/styled';
import { SearchAndFilterContext } from '@/components/pages/home/providers/searchContext';

export const CountryListTestId = 'country-list';

export const CountryList: FC = () => {
  const { countries } = useContext(SearchAndFilterContext);

  if (!countries.length) {
    return (
      <h1>No countries found or something went wrong while fetching them.</h1>
    );
  }

  return (
    <StyledCountryList data-testid={CountryListTestId}>
      {countries.map((country, index) => (
        <CountryListItem
          key={`${country.cca3}_${country.ccn3}_${index}`}
          country={country}
        />
      ))}
    </StyledCountryList>
  );
};
