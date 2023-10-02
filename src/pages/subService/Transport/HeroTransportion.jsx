import React from 'react'


const HeroTransportion = () => {
    return (
        <div className='relative  mx-10  h-[765px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/transportion.png' className='w-[1265px] ' />
            <h1 className='text-white text-[48px] font-[600] leading-[50px] absolute top-[150px] left-[46%] '>
                TRANSPORT
            </h1>
            <h1 className='text-white text-[24px] font-mdbold leading-[50px] absolute top-[200px] left-[40%] '>
                NO# 1 SOLUTION FOR TRANSPORT
            </h1>
            <div className='boxShadow background w-[901px] h-[456px]  mx-40 pt-[35px] px-10  absolute top-[390px] rounded-lg'>
                <h1 className='mt-[35px] px-10 text-start  font-[600] text-[24px] fo' >
                    Connecting passengers and enhancing experience,
                    safely, efficiently and sustainably
                </h1>
                <p className='mt-[10px] px-10 text-start  font-semibold'>
                    As the transport industry focuses on enabling people in the UK to travel more safely and sustainably
                    it must also keep costs down, for passengers and in terms of operational efficiency.
                    We help tackle these challenges with our unique blend of transformational and technology expertise,
                    working in close collaboration with the country’s largest transport providers.
                    <br  />
                    <br />
                    Whether passengers are flying abroad on holiday, taking the train to work, or heading off in the car for a family outing,
                    we’ve been playing a part in helping to improve their journeys.
                    <br />
                    <br />
                    From running the world’s largest Ultra-Low Emission Zone (ULEZ), to planning local roads,
                    to building next-generation intelligent railway infrastructure and air traffic control systems, and
                    creating user-friendly integrated ticket systems for Network Rail and bus networks,
                    we deliver critical services in partnership with the public service operators to keep people on the move.
                </p>
            </div>
        </div>
    )
}

export default HeroTransportion

