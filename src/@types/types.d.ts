import 'styled-components'
import { themeDefault } from '../styles/theme/default'

type ThemeCoffe = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeCoffe {}
}
