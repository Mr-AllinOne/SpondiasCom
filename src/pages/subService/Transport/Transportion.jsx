import React from 'react'
import Header from '../../../components/Header'
import BankApp from '../Fintech/BankApp'
import HeroTransportion from './HeroTransportion'
import AirAgency from './AirAgency'
import AllGps from './AllGps'

const Transportion = () => {
    return (
        <div>
            <Header />
            <HeroTransportion />
            <AirAgency />
            <AllGps />
            <BankApp />

        </div>
    )
}

export default Transportion
