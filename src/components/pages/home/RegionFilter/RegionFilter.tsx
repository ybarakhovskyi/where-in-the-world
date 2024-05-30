// Vendors
import { FC, useCallback, useContext } from 'react';

// Modules
import { regionOptionsMock } from '@/core/dataMocks/regionsMock';

import { SearchAndFilterContext } from '@/components/pages/home/providers/searchContext';
// Components
import { Select } from '@/common/components/Select';

// Types
import { SelectOption } from '@/common/components/Select/types';

// Styles
import {
  StyledClearButton,
  StyledRegionFilterWrapper,
  StyledSelectWrapper,
} from './styled';
import { Icon } from '@/common/components/Icon';
import { FaXmark } from 'react-icons/fa6';
import { ButtonSize } from '@/common/components/Button/types';

export const RegionFilter: FC = () => {
  const { filterValue, setFilterValue } = useContext(SearchAndFilterContext);

  const handleOnSelect = useCallback(
    (option: SelectOption) => {
      setFilterValue(option.value);
    },
    [setFilterValue],
  );

  const handleOnClearButtonClick = useCallback(() => {
    setFilterValue(null);
  }, [setFilterValue]);

  return (
    <StyledRegionFilterWrapper>
      {filterValue && (
        <StyledClearButton
          label=""
          icon={<Icon icon={FaXmark} />}
          onClick={handleOnClearButtonClick}
          size={ButtonSize.SMALL}
        />
      )}

      <StyledSelectWrapper>
        <Select
          value={filterValue}
          options={regionOptionsMock}
          onSelect={handleOnSelect}
        />
      </StyledSelectWrapper>
    </StyledRegionFilterWrapper>
  );
};
