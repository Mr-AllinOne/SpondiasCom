import React from 'react'
import Header from '../components/Header'
import HeroClinet from '../components/Clinet/HeroClinet'
import MainClinet from '../components/Clinet/MainClinet'
import Brands from '../components/Clinet/Brands'
import Footer from '../components/Footer'

const Clinet = () => {
  return (
    <div>
      <Header />
      <HeroClinet />
      <MainClinet />
      <Brands />
      <Footer />
    </div>
  )
}

export default Clinet