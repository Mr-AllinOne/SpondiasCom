import React from 'react'

const HeroLogistic = () => {
    return (
        <div className='relative  mx-10  h-[745px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/Logistic/mainHero.png' className='w-[1265px] ' />
            <h1 className='text-white text-[48px] font-[600] leading-[50px]   px-2   rounded-lg  absolute top-[150px] left-[46%] '>
                Logistics
            </h1>
            <div className='boxShadow background w-[801px] h-[350px]  mx-40 pt-[35px] px-10  absolute top-[390px] left-[5%] rounded-lg'>
                <p className='mt-14 px-20 '>
                    cargo management systems are helpful systems designed to make loading and
                    storing heavy and/or bulky cargo in Metairie easier.
                    Broadly speaking, cargo management systems come in different
                    types, like truck bed rail systems, SUV interior organization systems,
                    and other systems, like RamBox.
                </p>
            </div>
        </div>
    )
}

export default HeroLogistic
