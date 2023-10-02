import React from 'react'
import AboutSpondTeam from '../../../content/AboutSpondTeam.json'
import SpondTeam from './SpondTeam'

const SponTeams = () => {
    return (
        <>
            <div className='flex mx-20 space-x-2  font-semibold'>
                <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>SPONDIAS </spn>
                <span className='text-4xl tracking-wide'>Team</span>
            </div>
            <div className='grid grid-cols-2 gap-4 mx-20 mt-4 h-[500px]'>
                {AboutSpondTeam.map((Team) => (
                    <SpondTeam key={Team} {...Team} />
                ))}
            </div>
        </>
    )
}

export default SponTeams
