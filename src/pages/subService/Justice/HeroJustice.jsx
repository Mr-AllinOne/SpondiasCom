import React from 'react'

const HeroJustice = () => {
    return (
        <div className='relative  mx-10  h-[765px] rounded-lg bg-no-repeat pb-2'>
            <img src='./images/Justice/Justice.png' className='w-[1265px] ' />
            <h1 className='text-white text-[48px] font-[600] leading-[50px]  bg-[#469BE0] px-2  opacity-80 rounded-lg  absolute top-[150px] left-[46%] '>
                JUSTICE
            </h1>
            <h1 className='text-white text-[24px] font-mdbold leading-[50px] bg-[#469BE0] px-2 mt-2  opacity-80 absolute top-[200px] left-[23%] rounded-lg '>
                We keep businesses thriving with managed IT solutions and services.
            </h1>
            <div className='boxShadow background w-[901px] h-[500px]  mx-40 pt-[35px] px-10  absolute top-[390px] rounded-lg'>
                <h1 className='mt-[30px] text-start  font-[400] text-[24px] ' >
                    In its simplest form, IT support is about offering assistance to employees and the wider organization for technology-related issues.
                    Its purpose is to provide users with answers to problems they may be experiencing. In a business environment, IT support can also encompass the setup, installation,
                    and configuration of equipment, plus much more
                </h1>
                <p className='mt-[10px] px-10 text-start '>
                    Some of the most common IT support responsibilities<br />
                    can include:
                    <div className='ml-2'>
                        <li>Troubleshooting and resolving IT issues</li>
                        <li>Providing technical assistance to employees </li>
                        <li>Updating and maintaining company systems and networks</li>
                        <li>Installing and configuring software</li>
                        <li>Managing user access permissions and credentials</li>
                        <li>Rolling out patches and updates</li>
                        <li>Procuring and provisioning devices</li>
                        <li>Assisting with data backup and recovery</li>
                    </div>

                </p>
            </div>
        </div>
    )
}

export default HeroJustice
