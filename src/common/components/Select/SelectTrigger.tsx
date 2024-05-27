// Vendors
import { FC, useCallback, useContext } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

// Components
import { Icon } from '@/common/components/Icon';

// Modules
import { SelectContext } from './context/selectContext';

// Styles
import { StyledSelectTrigger } from './styled';

export const SelectTrigger: FC = () => {
  const { isOpen, setIsOpen, selectedOption } = useContext(SelectContext);
  const triggerText = selectedOption?.label || 'Filter by region';
  const triggerIcon = isOpen ? FaChevronUp : FaChevronDown;

  const handleTriggerOnClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <StyledSelectTrigger onClick={handleTriggerOnClick}>
      {triggerText}

      <Icon icon={triggerIcon} />
    </StyledSelectTrigger>
  );
};
