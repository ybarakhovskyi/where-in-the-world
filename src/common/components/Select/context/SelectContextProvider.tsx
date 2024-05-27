// Vendors
import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

// Modules
import { SelectContext } from './selectContext';

// Types
import { SelectContextType, SelectOption } from '../types';

type SelectContextProviderProps = PropsWithChildren<{
  initialValue: {
    options: SelectOption[];
    onSelect: (option: SelectOption) => void;
  };
}>;

export const SelectContextProvider: FC<SelectContextProviderProps> = ({
  initialValue,
  children,
}) => {
  const { options, onSelect } = initialValue;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  );

  const handleOnSelect = useCallback(
    (option: SelectOption) => {
      setSelectedOption(option);
      onSelect(option);
    },
    [onSelect],
  );

  const contextValue = useMemo(
    (): SelectContextType => ({
      isOpen,
      selectedOption,
      options,
      setIsOpen,
      setSelectedOption,
      handleOnSelect,
    }),
    [isOpen, selectedOption, options],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  );
};
