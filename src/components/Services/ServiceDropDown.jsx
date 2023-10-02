import React, { useState } from 'react'
import ServiceDropDownData from '../../content/serviceDropdown.json'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ServiceDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center  text-black'>
      <button className='flex w-full items-center justify-between font-normal ' onClick={() => setIsOpen((prev) => !prev)} >
        <h1 className='text-[18px] px-4 font-semibold'>Service</h1>
        {
          isOpen ? (<AiFillCaretUp className='h-8' />) : (<AiFillCaretDown className='h-8' />)
        }
      </button>
      {isOpen && (
        <div className='absolute w-[150px] top-10 flex flex-col rounded-lg bg-[#94a3b833]'>
          {ServiceDropDownData.map((item, i) => (
            <div className='flex flex-row  items-center border-b-2 mb-2 w-full hover:bg-[#90b7d8] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 ' key={item.name}>
              <img src={`./iconsImages/${item.image}`} className='h-8 w-8 bg-none' />
              <h3 className='italic pl-2'>
                <Link to='/transportion'>{item.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ServiceDropDown
