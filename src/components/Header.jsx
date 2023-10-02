import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ServiceDropDown from './Services/ServiceDropDown';

const Header = () => {
    const [navshow, setNavshow] = useState(false);

    const handlenav = () => {
        setNavshow(!navshow)
    }
    return (

        <header className='flex justify-between  items-center  h-24 max-w-[1240px] mx-auto px-10'>

            <div className >
                <img
                    src='./logos/logo_page.png'
                    alt='logo'
                    className='h-18 w-25'
                />
            </div>
            <div className='hidden md:flex  text-[18px] px-4 font-semibold '>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'text-[#4fa1f4] font-semibold underline ' : 'px-4'}
                    end
                >Home</NavLink>
                <div >
                    <ServiceDropDown />
                </div>
                {/* <NavLink
                    to="#"
                    className={({ isActive }) => isActive ? 'text-[#4fa1f4] font-semibold underline ' : 'px-4 '}
                ></NavLink> */}
                <NavLink
                    to="/clinet"
                    className={({ isActive }) => isActive ? 'text-[#4fa1f4] font-semibold underline ' : 'px-4'}
                >Client</NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? 'text-[#4fa1f4] font-semibold underline ' : 'px-4'}
                >About Us</NavLink>
                <NavLink
                    to="/article"
                    className={({ isActive }) => isActive ? 'text-[#4fa1f4] font-semibold underline ' : 'px-4'}
                >Article</NavLink>
            </div>
            <div onClick={handlenav} className='block md:hidden cursor-pointer '>
                {!navshow ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>
            <div className={!navshow ? 'md:hidden  fixed w-[80%]  left-0 top-0  border-r-gray-900 h-full bg-gray-100 eas-in-out duration-500' : 'md:hidden fixed left-[-100%]'}>
                <div>
                    <img
                        src='./logos/logo_page.png'
                        alt='logo'
                        className=' m-4 h-18 w-25'
                    />
                </div>
                <ul className=' cursor-pointer flex flex-col my-2 m-4 space-y-3 text-[18px] font-bold'>
                    <Link className='px-4 border-b border-gray-300' to='/'>Home</Link>
                    <Link className='px-4 border-b border-gray-300' to='/services'>Services</Link>
                    <Link className='px-4 border-b border-gray-300' to='/clinet'>Client</Link>
                    <Link className='px-4 border-b border-gray-300' to='/about'>About Us</Link>
                    <Link className='px-4' to='/article'>Article</Link>
                </ul>

            </div>


        </header>


    )
}

export default Header