import React from 'react'
import Header from '../components/Header'
import Herohome from '../components/Herohome'
import Services from '../components/HomeServices/Services'
import Clinet from '../components/Clinet'
import Wnews from '../components/Wnew/Wnews'
import SponTeams from '../components/STeam/SponTeams'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className='relative'>
            <Header />
            <Herohome />
             <Services />
            {/* <Clinet />
            <Wnews />
            <SponTeams />
            <Footer />  */}
        </div>
    )
}

export default Home