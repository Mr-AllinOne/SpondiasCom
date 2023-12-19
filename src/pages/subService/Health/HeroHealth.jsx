import React from 'react'

const HeroHealth = () => {
    return (
        <div className='relative  mx-10  h-[745px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/Health/heroHealth.png' className='w-[1265px] ' />
            <h1 className='text-white text-[48px] font-[600] leading-[50px]   px-2   rounded-lg  absolute top-[150px] left-[46%] '>
                Health
            </h1>
            <div className='boxShadow background w-[801px] h-[430px]  mx-40 pt-[35px] px-10  absolute top-[390px] left-[5%] rounded-lg'>
                <p className='mt-14 px-20 '>
                    With over 20 years’ experience of making a tangible difference in healthcare, at Capita we understand these challenges.
                    We’re helping the NHS to find relevant answers to long term objectives and immediate pressures,
                    applying our unique breadth of capabilities across people,
                    skills, technology and back-office transformation across a diverse range of care areas.
                    With a focus on relevant, sustainable partnerships, implemented for both long term benefit
                    and immediate peace of mind, we’re helping the NHS frontline every day, including supporting
                    the primary care of over 56 million people in England.
                    Take a look at our library of useful resources below - including thought leadership articles and case studies -
                    to help you overcome the challenges of today and prepare you for what’s ahead tomorrow.
                    Find out about our award-winning services which help build better experiences,
                    improve skills and empowerment, increase operational effectiveness and enhance environments and estates
                </p>
            </div>
        </div>
    )
}

export default HeroHealth
