import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({ image, description, title }) => {
    return (
        <>

            <div className='
                px-2
                w-[50%]
                h-[50%] 
                my-7
                mx-10'>
                <div className='
                    shadow-lg
                    w-[100%] 
                    h-[350px] 
                    flex 
                    flex-col 
                    items-center
                    justify-center 
                    px-5 
                    my-2
                    rounded-lg
                    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
                '>
                    <h2 className='text-center font-semibold py-[2px]'>
                        {title}
                    </h2>
                    <div className='flex items-center justify-center my-2'>
                        <img src={`./serImage/${image}`} className='h-30' />
                    </div>
                    <p className='text-center'>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Service