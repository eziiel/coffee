import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
