import 'styled-components';
import { Theme } from '@/global/themes/default';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
