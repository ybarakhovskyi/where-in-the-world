// Vendors
import { createContext } from 'react';

// Types
import { SelectContextType } from '../types';

export const SelectContext = createContext<SelectContextType>({
  isOpen: false,
  selectedOption: null,
  setSelectedOption: () => {},
  setIsOpen: () => {},
  options: [],
});
