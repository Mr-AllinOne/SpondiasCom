import React from 'react'
import ItSupport from '../../../content/ItSupport.json'

const ITSuppert = () => {
    return (
        <div className=' mt-[140px]'>
            <div className='flex mx-20 space-x-2  font-semibold'>
                <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>IT</spn>
                <span className='text-4xl tracking-wide'>Support</span>
            </div>

            <div className='flex flex-col flex-1 justify-center items-center w-full mt-[10px]'>
                {
                    ItSupport.map((support, idx) => (

                        <div key={idx} className={`flex flex-row flex-1 ${support.id % 2 !== 0 ? 'sm:flex-row-reverse' : ""} mx-20 mb-[50px]`}>
                            <div className={` flex flex-col pt-10  w-[50%]  `}>
                                <h1 className='text-[#469BE0] text-[27px] font-semibold py-2 px-2'>{support.title}</h1>
                                <p className='text-[#777] text-[20px] py-6 '>{support.description}</p>
                            </div>
                            <div className=' w-[600px] px-[60px] '>
                                <img src={`./images/Justice/${support.image}`} className='h-[350px] pt-[30px] w-[600px] bg-contain' alt='itSupport' width={"380px"} />
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default ITSuppert
