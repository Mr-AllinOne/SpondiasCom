import React from 'react'
import Header from '../../components/Header'
import HeroEduction from './Education/HeroEduction'
import StudentEducatio from './Education/StudentEducatio'
import StudentsAttendence from './Education/StudentsAttendence'
import Footer from '../../components/Footer'

const Education = () => {
    return (
        <div>
            <Header />
            <HeroEduction />
            <StudentEducatio />
            <StudentsAttendence />
            <Footer />

        </div>
    )
}

export default Education
