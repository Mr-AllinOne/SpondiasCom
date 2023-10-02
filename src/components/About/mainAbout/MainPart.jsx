import React from 'react'


const MainPart = ({ id, image, title, description }) => {
    return (
        <div className={`flex flex-row flex-1 ${id % 2 !== 0 ? 'sm:flex-row-reverse' : ""}  mx-20 mb-[50px] px-2 rounded-lg boxShadow`}>
            <div className={` flex flex-col pt-20   w-[50%] p-4 `}>
                <h1 className='text-[#469BE0] text-[27px] font-semibold py-2'>{title}</h1>
                <p className='text-[#777] text-[20px] py-6 px-4'>{description}</p>
            </div>
            <div className=' flex justify-center  items-center w-[500px] '>
                <img src={`./mainPart/${image}`} alt='mainAbout' width={ "350px"} hieght={ "50px"} />
            </div>
        </div>
    )
}

export default MainPart
