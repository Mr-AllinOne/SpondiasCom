import React from 'react'

const SpondTeam = ({role, image, name}) => {
  return (
    <div className=' shadow-lg bg-[#fcffff] w-[35%] h-[300px] mb-15 flex flex-col items-center p-2 mx-2 rounded-lg my-20'>
      <div className=''>
        <img src={`./spondsTeam/${image}`} className='h-[143px] rounded-full border-sky-400  ' />
      </div>
      <h2 className='text-2xl font-bold my-4' >
        {name}
      </h2>
      <h2 className='text-2xl font-semibold text-[#469BE0] '>{role}</h2>
    </div>
  )
}

export default SpondTeam