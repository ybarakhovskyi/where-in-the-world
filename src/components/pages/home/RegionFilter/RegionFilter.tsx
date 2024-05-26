// Vendors
import { FC, useCallback } from 'react';

// Components
import { Select } from '@/common/components/Select';

// Types
import { SelectOption } from '@/common/components/Select/types';

// Styles
import { StyledRegionFilterWrapper } from './styled';

const regionOptionsMock = [
  { label: 'Africa', value: 'africa' },
  { label: 'America', value: 'America' },
  { label: 'Asia', value: 'Asia' },
  { label: 'Europe', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' },
];

export const RegionFilter: FC = () => {
  const handleOnSelect = useCallback((option: SelectOption) => {
    console.log(option);
  }, []);

  return (
    <StyledRegionFilterWrapper>
      <Select options={regionOptionsMock} onSelect={handleOnSelect} />
    </StyledRegionFilterWrapper>
  );
};
