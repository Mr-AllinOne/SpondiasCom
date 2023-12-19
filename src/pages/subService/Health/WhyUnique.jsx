import React from 'react'

const WhyUnique = () => {
    return (
        <div className='mx-20 mt-10 mb-6 rounded-2xl w-[1099px]'>
            <div className=' bg-cover  w-[1099px] h-[351px] rounded-xl ' style={{ backgroundImage: 'url(./images/Health/unique.png)', }}>
                <div className='text-[#fff] backgroundGrand w-[950px] h-[351px] px-10 py-20  '>

                    <h1 className='text-[33px] font-[700] '>
                        We understand health and<br />
                        public services because we live it.
                    </h1>
                    <p className='text-[20px] mt-4'>
                        Public service is complex. It is about real people’s lives on rich and varied journeys,
                        real organisations and complex systems that cannot be changed overnight.
                        Take a look at our interactive infographic to see how we’re helping healthcare.
                    </p>
                </div>

            </div>




            <div className="mt-10 flex flex-row flex-1  items-center px-5 py-4 pr-2 gap-4">
                <div className="flex flex-col px-2 w-[60%] gap-2">
                    <div className='flex mx-5 space-x-2  font-semibold'>
                        <span className='text-4xl tracking-wide'>Putting people first-</span>
                    </div>
                    <div className="text-start w-[550px] ">
                        <p className='text-[18px]  tracking-normal leading-[30px] mt-6 px-2 '>
                            Explore our interactive infographic for insights into how we're helping
                            healthcare providers address current and future challenges. Click on the individual
                            segments to learn more about our solutions.
                        </p>
                    </div>
                </div>

                <div className="h-[255px] w-[350px] rounded-lg flex justify-center items-center" >
                    <img src="./images/Health/textHealth.png" alt="textHealth" className="h-[250px] w-[250px] py-2 px-2" />
                </div>
            </div>


            <div className=' bg-cover  w-[1099px] h-[351px] rounded-xl ' style={{ backgroundImage: 'url(./images/Health/getInTouch.png)', }}>
                <div className='text-[#fff] backgroundGrand w-[950px] h-[351px] px-10 py-20  '>

                    <h1 className=' text-[54px] font-[800] font-sans '>
                        Get in touch
                    </h1>
                    <h1 className='text-[35px] pl-4 font-[400] '>
                        with our healthcare <br /> operations experts
                    </h1>

                </div>

            </div>

        </div>
    )
}

export default WhyUnique
