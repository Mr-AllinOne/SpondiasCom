import React from 'react'

const HeroRatil = () => {
    return (
        <div className='relative  mx-10  h-[745px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/Retial/mainRetail.png' className='w-[1265px] ' />
            <h1 className='text-white text-[48px] font-[600] leading-[50px]   px-2   rounded-lg  absolute top-[150px] left-[46%] '>
                Retail
            </h1>
            <div className='boxShadow background w-[801px] h-[350px]  mx-40 pt-[35px] px-10  absolute top-[390px] left-[5%] rounded-lg'>
                <p className='mt-14 px-20 '>
                    POS: Point of SaleSo, it can be a physical store where
                    checkout happens, orders are processed, and bills are paid
                    using POS terminals and systems, or it can be a virtual sales
                    point such as a computer or mobile electronic device.
                </p>
            </div>
        </div>
    )
}

export default HeroRatil
