'use client';

import { FC, useCallback } from 'react';
import { Button } from '@/common/components/Button';
import { ButtonSize } from '@/common/components/Button/types';
import { StyledBorderCountriesListItem } from './styled';
import { useRouter } from 'next/navigation';

export type BorderCountriesLIstItemProps = {
  countryName: string;
};

export const BorderCountriesListItem: FC<BorderCountriesLIstItemProps> = ({
  countryName,
}) => {
  const { push } = useRouter();
  const handleOnClick = useCallback(() => {
    push(`/${countryName}`);
  }, []);

  return (
    <StyledBorderCountriesListItem>
      <Button
        label={countryName}
        size={ButtonSize.SMALL}
        onClick={handleOnClick}
      />
    </StyledBorderCountriesListItem>
  );
};
