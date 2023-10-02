import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';




const SpondTeam = ({ image, name, title, description }) => {
    return (
        <div className=' relative flex flex-row justify-center items-center   rounded-lg h-[220px]'>
            <div className='z-10 absolute top-[2px] left-[50px]  '>
                <img src={`./spondsTeam/${image}`}
                    width={"138px"}
                    alt="profileImage"
                    className='rounded-full border-2 border-[#0A6CBD]  '
                />
            </div>
            <div className='flex flex-col    bg-[#E8F0F7] h-[200px] pt-[20px] pl-[100px] mt-[50px] ml-[100px] mr-2 rounded-lg '>

                <h1 className='font-bold text-[20px]'>
                    {name}
                </h1>
                <h1 className='text-[#0A6CBD] font-[600] text-[18px]'>
                    {title}
                </h1>
                <p className='text-[15px] text-[#777]  pt-[10px]'>
                    {description}
                </p>
                <div className='flex flex-row justify-end px-2 space-x-2 pt-[15px] pb-[2px] cursor-pointer'>

                    <BsFacebook size={20} />
                    <AiOutlineGithub size={20} />
                    <AiFillInstagram size={20} />
                    <AiFillLinkedin size={20} />

                </div>

            </div>



        </div>
    )
}

export default SpondTeam
