import React from 'react'
import serviceData from '../../content/service.json'
import Service from './Service'

const Services = () => {
  return (
    <>
      <div className='mt-2 space-x-2 font-semibold flex md:mx-20 md:space-x-2  md:font-semibold'>
        <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>Our</spn>
        <span className='text-4xl tracking-wide'>Service</span>
      </div>
      <div className='flex flex-row w-[45%] h-[55%] md:flex md:flex-row md:w-full'>

        {serviceData.map((dataService) => (
          <Service key={dataService.id} {...dataService} />
        ))}

      </div>
    </>
  )
}

export default Services