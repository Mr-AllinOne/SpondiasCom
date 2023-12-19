import React from 'react'
import Header from '../../components/Header'
import HeroHealth from './Health/HeroHealth'
import HealthSector from './Health/HealthSector'
import WhyUnique from './Health/WhyUnique'
import Footer from '../../components/Footer'

const Health = () => {
    return (
        <div>
            <Header />
            <HeroHealth />
            <HealthSector />
            <WhyUnique />
            <Footer />

        </div>
    )
}

export default Health
