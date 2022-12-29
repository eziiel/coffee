import { GlobalStyles } from './style/global'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './style/theme/default'

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <h1>olá!</h1>
    </ThemeProvider>
  )
}
