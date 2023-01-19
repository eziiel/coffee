import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
import { Adress } from './assets/adress'
import { Delivery } from './assets/delivery'
import { Home } from './assets/home'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="adress" element={<Adress />} />
          <Route path="delivery" element={<Delivery />} />
        </Route>
      </Routes>
    </div>
  )
}
