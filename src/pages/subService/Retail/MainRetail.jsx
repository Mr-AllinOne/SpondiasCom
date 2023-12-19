import React from 'react'

const MainRetail = () => {
    return (
        <>

            <div className="mx-[80px]  mt-10 flex flex-row flex-1  items-center px-5 py-4 pr-2 gap-4">
                <div className="flex flex-col px-2 w-[60%] gap-2">
                    <div className='flex mx-5 space-x-2  font-semibold'>
                        <span className='text-4xl tracking-wide'>POS-</span>
                        <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>ALIABABA</spn>
                    </div>
                    <div className="text-start w-[550px] ">
                        <p className='text-[18px]  tracking-normal leading-[30px] mt-6 px-2 '>
                            A point of sale, or point of purchase, is where you ring up customers.
                            When customers check out online, walk up to your checkout counter, or
                            pick out an item from your stand or booth, they're at the point of sale.
                            Your point-of-sale system is the hardware and software that enable your
                            business to make those sales.
                        </p>
                    </div>
                </div>

                <div className="h-[255px] w-[350px] rounded-lg flex justify-center items-center" >
                    <img src="./images/Retial/retailText.png" alt="text Logisticas" className="h-[250px] w-[250px] py-2 px-2" />
                </div>
            </div>

            <div className="mx-20 mt-10 py-2  mb-4 px-20">
                <img src='./images/Retial/retail.png' alt='retail' width='1000px' className='bg-contain' />
            </div>

            <div className="mx-20 mt-10 py-2  mb-4 px-20">
                <img src='./images/Retial/conceptRetail.png' alt='conceptRetail' width='1000px' className='bg-contain' />
            </div>




        </>
    )
}

export default MainRetail
