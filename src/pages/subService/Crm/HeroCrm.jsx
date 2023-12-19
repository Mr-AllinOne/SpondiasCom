import React from 'react'

const HeroCrm = () => {
    return (
        <div className='relative  mx-10  h-[765px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/crm/crm.png' className='w-[1265px] ' />
            <h1 className='text-white text-[48px] font-semibold leading-[50px] tracking-[10px] absolute top-[140px] left-[45%] '>
                CRM
            </h1>
            <div className='boxShadow background w-[800px] h-[380px]   mx-40 pt-[35px]   absolute top-[350px] rounded-lg'>
                <p className='mt-[110px] w-[600px] ml-[120px] leading-[30px] px-2 text-[20px] '>
                    A Customer Relationship Management (CRM) system helps manage customer data.
                    It supports sales management, delivers actionable insights, integrates
                    with social media and facilitates team communication.
                    Cloud-based CRM systems offer complete mobility and access to an ecosystem of bespoke apps.
                </p>
            </div>
        </div>
    )
}

export default HeroCrm
