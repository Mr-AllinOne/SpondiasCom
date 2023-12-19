import React from 'react'
import Header from '../../components/Header'
import HeroLogistic from './Logistic/HeroLogistic'
import CargoShiping from './Logistic/CargoShiping'
import WhatWeCan from './Logistic/WhatWeCan'
import Footer from '../../components/Footer'
const Logistic = () => {
    return (
        <div>
            <Header />
            <HeroLogistic />
            <CargoShiping />
            <WhatWeCan />
            <Footer/>
        </div>
    )
}

export default Logistic
