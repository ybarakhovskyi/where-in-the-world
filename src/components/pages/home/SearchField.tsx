import { FC } from 'react';
import { TextField } from '@/common/components/TextField';
import { FaSearch } from 'react-icons/fa';

export const SearchField: FC = () => (
  <TextField placeholder="Search for a country" icon={FaSearch} />
);
