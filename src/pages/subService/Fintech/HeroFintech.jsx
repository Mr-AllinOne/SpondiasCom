import React from 'react'


const HeroFintech = () => {
    return (
        <div className='relative  mx-10  h-[765px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/HeroFintech.png' className='w-[1265px] ' />
            <h1 className='text-white text-4xl font-semibold leading-[50px] absolute top-[100px] left-[60px] '>
                Finance <br /> and Technology
            </h1>
            <div className='boxShadow background w-[901px] h-[406px]  mx-40 pt-[35px] px-10  absolute top-[350px] rounded-lg'>
                <p className='mt-[110px] px-10 text-start  font-semibold'>
                    FinTech (financial technology) is a catch-all
                    term referring to software, mobile applications, and other technologies created to improve and automate
                    traditional forms of finance for businesses and consumers alike.
                    <br />
                    <br />
                    Relying on smartphones for almost everything has become the new normal in today’s fast-paced world, particularly when it comes to financial services.
                    But it is actually the financial technology in the background that enables these services, making transactions
                    a simple act of a
                    touch or a click. Here’s a primer on the basics
                </p>
            </div>
        </div>
    )
}

export default HeroFintech

