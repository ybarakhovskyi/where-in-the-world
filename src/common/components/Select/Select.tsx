// Vendors
import { FC, useMemo } from 'react';

// Modules
import { SelectContextProvider } from '@/common/components/Select/context';

// Components
import { SelectTrigger } from '@/common/components/Select/SelectTrigger';
import { SelectDropdown } from '@/common/components/Select/SelectDropdown';

// Types
import { SelectOption } from '@/common/components/Select/types';

// Styles
import { StyledSelectWrapper } from './styled';

type SelectProps = {
  options: SelectOption[];
  onSelect: (option: SelectOption) => void;
};

export const Select: FC<SelectProps> = ({ options, onSelect }) => {
  const contextInitValue = useMemo(
    () => ({
      onSelect,
      options,
    }),
    [options, onSelect],
  );

  return (
    <SelectContextProvider initialValue={contextInitValue}>
      <StyledSelectWrapper>
        <SelectTrigger />

        <SelectDropdown />
      </StyledSelectWrapper>
    </SelectContextProvider>
  );
};
