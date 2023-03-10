import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { themeDefault } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CoffeesProvider } from './context/contextCoffees/context'
import { AdressProvider } from './context/contextAdress/context'

export const App = () => {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <CoffeesProvider>
          <AdressProvider>
            <Router />
          </AdressProvider>
          <GlobalStyles />
        </CoffeesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
