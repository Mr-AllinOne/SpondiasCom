import React from 'react'
import Header from '../../components/Header'
import HeroRatil from './Retail/HeroRatil'
import Footer from '../../components/Footer'
import MainClinet from '../../components/Clinet/MainClinet'
import MainRetail from './Retail/MainRetail'

const Retail = () => {
    return (
        <div>
            <Header />
            <HeroRatil />
            <MainRetail />
            <Footer />

        </div>
    )
}

export default Retail
