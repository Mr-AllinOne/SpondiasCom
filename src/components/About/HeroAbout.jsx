import React from 'react'

const HeroAbout = () => {
    return (
        <div className='relative  mx-10  h-[765px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/about.png' className='w-[1265px] ' />
            <h1 className='text-white  text-5xl font-semibold leading-[50px] absolute top-[135px] left-[500px] '>
                About Us
            </h1>
            <div className='boxShadow bg-white w-[901px] h-[530px]  mx-40  px-6 pt-4  absolute top-[350px] rounded-lg'>

                <div className='flex flex-row flex-1 w-full'>

                    <div className=' w-[35%] flex flex-row justify-center items-center ' >
                        <img src='./images/aboutImge.jpeg' alt='aboutimage' className=' w-[500px] h-[260px]' />
                    </div>

                    <div className='flex flex-col w-[70%] '>
                        <h1 className='text-center text-[25px] pt-4 font-bold textAbout '>
                            ABOUT SPONDAIS
                        </h1>

                        <p className='text-start font-size[13px]  text-[#777]'>
                            Spondias is a company dedicated to personal service, tailoring our expertise in Corporate Training & Project Consulting.
                            We feel it is important to take the time to assess your particular requirements to offer what we feel is the best solution for your requirement.
                            <br />

                            Spondias is committed to offering its customers the best services and cutting-edge technologies to increase the customer's revenue stream.
                            Our team has relevant experience in Requirement Analyzing, Designing, Planning, and implementing the project to ensure full control of the
                            developing process.
                            We want to give you the convenience of one-stop Solutions for all the customized requirements.

                            <br />
                            Spondias' core portfolio comprises Project Consulting, Skill Gap Analysis, Corporate Training & Recruitment Solutions.
                            We deliver a broad portfolio of Information technology and Knowledge process outsourcing services to clients in the Manufacturing,
                            Financial Services, Healthcare, Communications, Transportation,
                            and Retail industries and to Governments around the world.
                        </p>
                        <div className='flex flex-row justify-between px-2 text-[#469BE0] text-[17px] font-bold'>
                            <h1>Clinets</h1>
                            <h1>Projects</h1>
                            <h1>Service</h1>

                        </div>
                        <div className='flex flex-row justify-between px-[15px] text-black text-[17px] font-bold'>
                            <p>250+</p>
                            <p>100+</p>
                            <p>50+</p>
                        </div>
                        <button className='backgButton text-[17.375px] font-bold mt-2 text-[#FFF] py-[6px] mx-[190px] rounded-lg  mt-2'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroAbout
