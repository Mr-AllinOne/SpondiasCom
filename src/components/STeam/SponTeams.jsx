import React from 'react'
import spondTeamData from '../../content/spondTeam.json'
import SpondTeam from './SpondTeam'

const SponTeams = () => {
  return (
    <>
      <div className='flex mx-20 space-x-2  font-semibold'>
        <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>SPONDIAS </spn>
        <span className='text-4xl tracking-wide'>Team</span>
      </div>

    <div className='bg-yellow-200 mx-10 flex flex-row backdropImge' >
      {
        spondTeamData.map(team => (
          <SpondTeam key={team.id} {...team} />
        ))
      }
    </div>
    </>
  )
}

export default SponTeams