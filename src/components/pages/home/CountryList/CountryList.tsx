'use client';

import { FC, useContext } from 'react';
import { CountryListItem } from '@/components/pages/home/CountryList/CountryListItem';

// Styles
import { StyledCountryList } from '@/components/pages/home/CountryList/styled';
import { SearchAndFilterContext } from '@/components/pages/home/providers/searchContext';

export const CountryList: FC = () => {
  const { countries } = useContext(SearchAndFilterContext);

  if (!countries.length) {
    return (
      <h1>No countries found or something went wrong while fetching them.</h1>
    );
  }

  return (
    <StyledCountryList>
      {countries.map((country) => (
        <CountryListItem
          key={`${country.cca3}_${country.ccn3}`}
          country={country}
        />
      ))}
    </StyledCountryList>
  );
};
