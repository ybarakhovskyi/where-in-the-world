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
  value: string | null;
  options: SelectOption[];
  onSelect: (option: SelectOption) => void;
};

export const Select: FC<SelectProps> = ({ value, options, onSelect }) => {
  const contextInitValue = useMemo(
    () => ({
      onSelect,
      options,
      value,
    }),
    [options, onSelect, value],
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
