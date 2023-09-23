import React from 'react'
import clinetDat from '../content/clinet.json'

const Clinet = () => {
    return (
        <>
            <div className='flex mx-20 space-x-2  font-semibold'>
                <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>Our</spn>
                <span className='text-4xl tracking-wide'>Clinet</span>
            </div>
            <div className='bg-[#dbedfb] py-2 my-4 flex items-center mx-10 px-10 mb-10 rounded-lg'>
                {
                    clinetDat.map(clinet => (
                        <div className=' px-20 py-2' >
                            <img src={`./clinet/${clinet.image}`} className='h-10' />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Clinet