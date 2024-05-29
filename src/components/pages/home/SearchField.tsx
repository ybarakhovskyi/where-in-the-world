import { ChangeEvent, FC, useCallback, useContext } from 'react';
import { TextField } from '@/common/components/TextField';
import { FaSearch } from 'react-icons/fa';
import { SearchAndFilterContext } from '@/components/pages/home/providers/searchContext';

export const SearchField: FC = () => {
  const { setSearchValue } = useContext(SearchAndFilterContext);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  }, []);

  return (
    <TextField
      placeholder="Search for a country"
      icon={FaSearch}
      onChange={handleOnChange}
    />
  );
};
