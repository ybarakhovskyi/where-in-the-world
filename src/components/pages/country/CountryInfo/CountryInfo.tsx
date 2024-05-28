'use client';

// Vendors
import { FC, useEffect } from 'react';
import Image from 'next/image';

// Modules
import { getCountryDetails } from './utils/getCompanyDetails';

// Components

// Types
import { Country } from '@/types/country';

// Styles
import {
  StyledCountryDetails,
  StyledCountryDetailsWrapper,
  StyledCountryName,
} from './styled';
import { BorderCountriesList } from '@/components/pages/country/CountryInfo/BorderCountriesList';

export const CountryInfo: FC<{
  country: Country;
  borderCountries: Country[] | string[];
}> = ({ country, borderCountries }) => {
  const countryDetails = getCountryDetails(country);

  return (
    <>
      <Image
        src={country.flags.svg}
        alt={country.flags.alt || `${country.name.common} flag`}
        width={560}
        height={400}
      />

      <StyledCountryDetailsWrapper>
        <StyledCountryName>{country.name.common}</StyledCountryName>

        <StyledCountryDetails>
          {countryDetails.map(([label, value]) => (
            <li key={`${label}_${value}`}>
              <strong>{label}:</strong> <span>{value}</span>
            </li>
          ))}
        </StyledCountryDetails>

        <BorderCountriesList borderCountries={borderCountries} />
      </StyledCountryDetailsWrapper>
    </>
  );
};
