import { FC } from 'react';
import { BorderCountriesListItem } from './BorderCountriesLIstItem';
import {
  StyledBorderCountriesList,
  StyledBorderCountriesWrapper,
} from './styled';
import { Country } from '@/types/country';

export type BorderCountriesListProps = {
  borderCountries: Country[] | string[];
};

export const borderCountriesListLabel = 'Border countries';

export const BorderCountriesList: FC<BorderCountriesListProps> = ({
  borderCountries,
}) => {
  const hasNoBorderCountries = borderCountries.length > 0;

  return (
    <StyledBorderCountriesWrapper>
      <strong>Border countries: </strong>

      {!hasNoBorderCountries ? (
        <span>No border countries</span>
      ) : (
        <StyledBorderCountriesList aria-label={borderCountriesListLabel}>
          {borderCountries.map((value) => {
            let countryName: string;

            if (typeof value === 'string') {
              countryName = value;
            } else {
              countryName = value.name.common;
            }

            return (
              <BorderCountriesListItem
                key={countryName}
                countryName={countryName}
              />
            );
          })}
        </StyledBorderCountriesList>
      )}
    </StyledBorderCountriesWrapper>
  );
};
