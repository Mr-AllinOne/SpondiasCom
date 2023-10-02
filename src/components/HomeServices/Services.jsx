import React from 'react'
import serviceData from '../../content/service.json'
import Service from './Service'

const Services = () => {
  return (
    <>
      <div className='flex mx-20 space-x-2  font-semibold'>
        <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>Our</spn>
        <span className='text-4xl tracking-wide'>Service</span>
      </div>
    <div className='flex flex-row'>
     
      {serviceData.map((dataService) => (
        <Service key={dataService.id} {...dataService} />
      ))}
     
    </div>
    </>
  )
}

export default Services