import { FC, InputHTMLAttributes } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Icon } from '@/common/components/Icon';
import { TextFieldProps } from './types';
import {
  StyledTextField,
  StyledTextFieldWrapper,
} from '@/common/components/TextField/styled';

type TextFieldFinalProps = TextFieldProps &
  InputHTMLAttributes<HTMLInputElement>;

export const TextField: FC<TextFieldFinalProps> = ({ icon, ...attrs }) => (
  <StyledTextFieldWrapper>
    <Icon icon={FaSearch} />

    <StyledTextField {...attrs} />
  </StyledTextFieldWrapper>
);
