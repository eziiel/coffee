import React from 'react'
import { Header } from '../../components/header'
import { IntroHome } from './components/intro'
import { Main } from './components/items'

export const Home = () => {
  return (
    <>
      <Header />
      <IntroHome />
      <Main />
    </>
  )
}
