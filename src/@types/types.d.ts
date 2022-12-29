import 'styled-components'
import { themeDefault } from '../style/theme/default'

type ThemeCoffe = typeof themeDefault

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeCoffe {}
}
