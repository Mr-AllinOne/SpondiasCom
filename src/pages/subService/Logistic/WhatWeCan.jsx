import React from 'react'
import WhatWeCanData from '../../../content/WhatWeCan.json'

const WhatWeCan = () => {
    return (
        <>
            <div className='mx-20 gap-2'>
                <div className='flex mx-5 space-x-2  font-semibold'>
                    <span className='text-4xl tracking-wide'>What We Can </span>
                    <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>Do</spn>
                </div>

                <div className='flex flex-row justify-center items-center  gap-2 mt-6   rounded-2xl mb-2'>
                    {WhatWeCanData.map(date => (
                        <div className='flex flex-col justify-center items-center  backGroundStudent p-2'>
                            <img src={`./images/Logistic/${date.image}`} className='bg-contain' />
                            <h1 className='mt-2 text-[16px] font-bold'>
                                {date.title}
                            </h1>
                            <p className='mx-10 mt-2 text-[14px]'>
                                {date.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="mx-20 mt-10 py-2  mb-4 px-20">
                <img src='./images/Logistic/logistic.png' alt='crm' width='1000px' className='bg-contain' />
            </div>
        </>
    )
}

export default WhatWeCan
