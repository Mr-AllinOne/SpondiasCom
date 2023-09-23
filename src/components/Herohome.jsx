import React from 'react'
import { Link } from 'react-router-dom'

const Herohome = () => {
    return (
        <div className=' flex flex-1 h-[500px] justify-center items-center max-w-[1240px] mx-auto px-10 w-full'>
            <div className='
                h-70 mr-2  
                text-black 
                w-[50%]
                flex
                flex-col
                p-10
                space-y-2
                '
            >
                <span className='text-4xl font-semibold tracking-wider'>
                    Making Your
                </span>
                <span className='text-5xl font-bold tracking-normal text-[#4fa1f4] '>
                    Business flourish
                </span>
                <p>
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
                        px-2 py-1
                        sm:px-4 py-2
                        rounded-lg
                        text-[18px]
                        text-white 
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
                        sm:px-4 py-2 
                        '
                    >
                        Contect Us
                    </button>
                </div>

            </div>
            <div className=' px-2 h-[450px] bg-contain text-white w-[50%] '
                style={{ backgroundImage: 'url(./images/amico.png)' }}
            >
            </div>
        </div>
    )
}

export default Herohome