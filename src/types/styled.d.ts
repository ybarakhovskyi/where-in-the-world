import 'styled-components';
import { Theme } from '@/core/themes/default';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
