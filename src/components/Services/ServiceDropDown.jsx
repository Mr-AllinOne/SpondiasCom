import React, { useState } from 'react'
import ServiceDropDownData from '../../content/serviceDropdown.json'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ServiceDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center  text-black'>
      <button className='flex w-full items-center justify-between font-semibold ' onClick={() => setIsOpen((prev) => !prev)} >
        <h1 className='text-[18px]  font-semibold'>Service</h1>
        {
          isOpen ? (<AiFillCaretUp className='h-8' />) : (<AiFillCaretDown className='h-8' />)
        }
      </button>
      {isOpen && (
        <div className='absolute w-[150px] top-10 flex flex-col rounded-lg bg-[#94a3b833] z-20'>
          {ServiceDropDownData.map((item, i) => (
            <div className='flex flex-row  items-center border-b-2 mb-2 w-full hover:bg-[#90b7d8] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 ' key={item.name}>
              <img src={`./public/iconsImages/${item.image}`} className='h-8 w-8 bg-none' />
              <h2 className='italic pl-2'>

                {/* <Link to={item.path}>{item.name}</Link> */}
                <Link to='/health'>{item.name}</Link>
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceDropDown
