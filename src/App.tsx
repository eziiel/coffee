import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CoffeesProvider } from './context/context'

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <CoffeesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyles />
      </CoffeesProvider>
    </ThemeProvider>
  )
}
