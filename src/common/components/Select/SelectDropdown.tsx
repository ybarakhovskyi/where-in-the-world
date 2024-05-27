// Vendors
import { FC, useContext } from 'react';

// Styles
import { StyledSelectDropdown } from './styled';
import { SelectContext } from '@/common/components/Select/context/selectContext';
import { SelectDropdownItem } from '@/common/components/Select/SelectDropdownItem';

export const SelectDropdown: FC = () => {
  const { isOpen, options, handleOnSelect } = useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <StyledSelectDropdown>
      {options.map((option) => (
        <SelectDropdownItem
          key={option.value}
          option={option}
          onClick={handleOnSelect}
        />
      ))}
    </StyledSelectDropdown>
  );
};
