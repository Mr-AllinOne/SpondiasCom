import React from 'react'

const MainClinet = () => {
    return (
        <>
            <div className='flex mx-[30px]'>
                <span className='text-[48px] font-[600]'>View our projects</span>
            </div>

            <div className='mx-[30px] flex flex-w flex-1 space-x-2 w-[1180px]  mt-6 mb-10'>
                <div className=' h-[600px]' style={{ backgroundImage: 'url(./clinet/oneBig.png)', backgroundSize: 'contain', width: '820px' }}>
                    <div className='bgLinear -z-[10] w-[402px] h-[600px] px-10 flex justify-center items-center text-[#fff]' >
                        <div className=' space-y-4 '>
                            <h1 className='text-[24px] font-[600] tracking-wide'>
                                Workhub office Webflow Webflow Design
                            </h1>
                            <p className='text-[16px] text-[#fff] opacity-80 trancking-normal'>
                                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
                            </p>
                        </div>
                    </div>
                    {/* <img src='./clinet/oneBig.png' alt="oneBig" width='820px' /> */}
                </div>
                <div className='flex flex-col '>
                    <div className='' style={{ backgroundImage: 'url(./clinet/smallOne.png)', backgroundSize: 'contain', width: '411px', height: '284px' }}>
                        <div className='bgLinear -z-[10] w-[411px] h-[284px]' >
                            <h1 className='text-[#fff] text-center   py-[100px] text-[24px] font-[600] w-[318px]' >
                                Unisaas Website
                                <br />
                                Design
                            </h1>
                        </div>
                        <div className='w-[411px] h-[36px]'>
                            <img src='./clinet/smallTwoo.png' alt="smallOne" className='h-[316px] w-[410px]' />
                        </div>

                    </div>

                    {/* <img src='./clinet/smallTwoo.png' alt="smallTwoo" /> */}
                </div>
            </div>

        </>
    )
}

export default MainClinet
