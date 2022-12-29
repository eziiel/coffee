import { Header } from '../components/header'
import { Outlet } from 'react-router-dom'
import { LayoutComponent } from './styled'

export const Layout = () => {
  return (
    <LayoutComponent>
      <Header />
      <Outlet />
    </LayoutComponent>
  )
}
