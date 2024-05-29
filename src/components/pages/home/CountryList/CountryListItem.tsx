// Vendors
import { FC } from 'react';

// Types
import { Country } from '@/types/country';

// Styles
import {
  StyledCountryDescription,
  StyledCountryFlag,
  StyledCountryInfo,
  StyledCountryLink,
  StyledCountryListItem,
} from './styled';
import { formatPopulationValue } from '@/core/utils/formatPopulationValue';

type CountryListItemProps = {
  country: Country;
};

export const CountryListItem: FC<CountryListItemProps> = ({ country }) => {
  return (
    <StyledCountryListItem>
      <StyledCountryLink href={`/${country.name.common}`}>
        <StyledCountryFlag
          src={country.flags.svg}
          alt={country.flags.alt || `${country.name.common} flag`}
          width={225}
          height={150}
          priority
        />

        <StyledCountryInfo>
          <h3>{country.name.common}</h3>

          <StyledCountryDescription>
            <li>
              <strong>Population:</strong>{' '}
              <span>{formatPopulationValue(country.population)}</span>
            </li>
            <li>
              <strong>Region:</strong> <span>{country.region}</span>
            </li>
            <li>
              <strong>Capital:</strong> <span>{country.capital}</span>
            </li>
          </StyledCountryDescription>
        </StyledCountryInfo>
      </StyledCountryLink>
    </StyledCountryListItem>
  );
};
