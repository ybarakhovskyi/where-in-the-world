export type SelectOption = {
  label: string;
  value: string | null;
};

export type SelectContextType = {
  isOpen: boolean;
  selectedOption: SelectOption | null;
  setSelectedOption: (option: SelectOption) => void;
  setIsOpen: (value: boolean) => void;
  options: SelectOption[];
  handleOnSelect: (option: SelectOption) => void;
};
