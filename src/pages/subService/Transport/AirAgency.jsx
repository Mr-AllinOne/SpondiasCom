import React from 'react'

const AirAgency = () => {
    return (
        <div className='mt-[100px]'>
            <div className='flex mx-20 space-x-2  font-semibold'>
                <span className='text-4xl tracking-wide'>AIRLINE</span>
                <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>AGENCY </spn>
            </div>
            
            <div className='relative w-[1077px] h-[369px] backgroundGrand mx-20 mt-5'
                style={{ backgroundImage: "url(./images/AirAgency.png)" }}>
                <div className='backgroundGrand w-[1077px] h-[369px] ' />
                <h1 className='absolute top-[50px] text-white  text-[44px] font-[700] leading-[66px] pl-12'>
                    Travel Agent system
                </h1>
                <p className='text-[25px] text-white leading-[37px] pl-16 absolute top-[120px] '>
                    Our Online Travel Agent system enables
                    travel agencies sell <br /> flights, hotels and packages online,
                    manage reservations, <br /> connect to multiple travel suppliers,
                    manage inventory and <br />generate quotations.
                </p>
            </div>
        </div>
    )
}

export default AirAgency
