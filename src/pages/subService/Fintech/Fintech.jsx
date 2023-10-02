import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import HeroFintech from './HeroFintech'
import BankApp from './BankApp'

const Fintech = () => {
  return (
    <div className=' max-w-[1240px] '>
      <Header />
      <HeroFintech />
      <BankApp />
      <Footer />
    </div>
  )
}

export default Fintech
