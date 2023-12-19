import React from 'react'
import { Link } from 'react-router-dom'

const Herohome = () => {
    return (
        <div className=' flex flex-1 h-[500px] justify-center items-center max-w-[1240px] mx-auto md:px-10 w-full'>
            <div className='
                w-[200px]
                px-2







                md:h-70 mr-2  
                md:text-black 
                md:w-[50%]
                md:flex
                md:flex-col
                md:p-10
                md:space-y-2
                md:mb-4
                '
            >
                <span className='text-4xl  md:text-[50.139px] font-semibold md:tracking-wider'>
                    Making Your
                </span>
                <span className='text-[29px] font-bold  text-[#4fa1f4] '>
                    Business flourish
                </span>
                <p className=''>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                    Quisquam eum voluptate iste sunt.
                    Exercitationem alias explicabo fugiat
                    aspernatur quo odio. Inventore est reprehenderit
                    qui adipisci rerum consectetur incidunt eveniet et.
                </p>
                <div className='flex px-2 py-2 space-x-2   '>
                    <button className='
                        bg-[#4fa1f4]
                        
                        px-[5px]
                        rounded-lg
                        text-[16px]
                        text-white

                        md:bg-[#4fa1f4]
                        md:px-2 md:py-1
                        sm:px-4 py-2
                        md:rounded-lg
                        md:text-[18px]
                        md:text-white 
                    '
                    >
                        <Link to='/about'>About Us</Link>
                    </button>
                    <button className=' 
                        text-[#4fa1f4]
                        border-solid 
                        border-2 
                        border-[#4fa1f4]
                        rounded-lg
                        
                        md:px-4 md:py-2 
                        '
                    >
                        Contect Us
                    </button>
                </div>

            </div>
            <div className='w-[50%] h-[385px]  md:w-[50%]'
            //style={{ backgroundImage: 'url(./images/amico.png)' }}
            >
                <img src="./images/amico.png" alt="" className='h-[450px] py-[70px] w-full bg-center bg-center md:w-[500px] md:px-[40px] md:h-[385px] md:bg-contain  ' />
            </div>
        </div>
    )
}

export default Herohome