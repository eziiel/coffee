import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
import { Adress } from './pages/adress'
import { Home } from './pages/home'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/adress" element={<Adress />} />
        </Route>
      </Routes>
    </div>
  )
}
