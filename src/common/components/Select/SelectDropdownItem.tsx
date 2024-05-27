import { FC, useCallback, useContext } from 'react';
import { SelectOption } from '@/common/components/Select/types';
import { StyledSelectDropdownItem } from '@/common/components/Select/styled';
import { SelectContext } from '@/common/components/Select/context/selectContext';

type SelectDropdownItemProps = {
  option: SelectOption;
  onClick: (option: SelectOption) => void;
};

export const SelectDropdownItem: FC<SelectDropdownItemProps> = ({
  option,
  onClick,
}) => {
  const { setIsOpen } = useContext(SelectContext);
  const handleOnClick = useCallback(() => {
    setIsOpen(false);
    onClick(option);
  }, [setIsOpen, onClick, option]);

  return (
    <li key={option.value}>
      <StyledSelectDropdownItem onClick={handleOnClick}>
        {option.label}
      </StyledSelectDropdownItem>
    </li>
  );
};
