'use client';

import { FC } from 'react';
import { CountryListItem } from '@/components/pages/home/CountryList/CountryListItem';

// Types
import { Country } from '@/types/country';

// Styles
import { StyledCountryList } from '@/components/pages/home/CountryList/styled';

type CountryList = {
  countries: Country[];
};

export const CountryList: FC<CountryList> = ({ countries }) => {
  if (!countries.length) {
    return (
      <h1>No countries found or something went wrong while fetching them.</h1>
    );
  }

  console.log('Ybarakhovskyi DEBUG:', countries);

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
